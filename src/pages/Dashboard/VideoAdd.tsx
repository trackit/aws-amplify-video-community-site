import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'
import { section } from '../../API'
import { fetchSections, uploadVideo } from '../../shared/utilities'

Amplify.configure(awsmobile)

type DropZoneProps = {
    setVodFile: any
}

const DropZone = ({ setVodFile }: DropZoneProps) => {
    return (
        <div id="drop-area">
            <p>Drop a file or</p>
            <input
                type="file"
                accept="video/*"
                onChange={(event: any) => {
                    setVodFile(event.target.files[0] || null)
                }}
            />
        </div>
    )
}

type VideoAddFormProps = {
    vodFile: File | null
}

const VideoAddForm = ({ vodFile }: VideoAddFormProps) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
    const [highlighted, setHighlighted] = useState<boolean>(false)
    const [existingSections, setExistingSections] = useState<
        Array<section | undefined>
    >([])
    const [selectedSections, setSelectedSections] = useState<
        Array<section | undefined>
    >([])
    const [nextTokenSections, setNextTokenSections] =
        useState<string | null>(null)
    // const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        ;(async () => {
            // setLoading(true)
            try {
                const { data }: any = await fetchSections(nextTokenSections)
                setNextTokenSections(
                    data.listSections.nextToken
                        ? data.listSections.nextToken
                        : null
                )
                setExistingSections(data.listSections.items)
            } catch (error) {
                console.error('VideoAdd.tsx ', error)
            }
            // setLoading(false)
        })()
    }, [setExistingSections, setNextTokenSections, nextTokenSections])

    const onSubmit = async (event: any) => {
        event.preventDefault()
        console.log(
            title,
            description,
            vodFile,
            thumbnailFile,
            highlighted,
            selectedSections.map((section) => {
                return section && section.id
            })
        )
        try {
            await uploadVideo(
                title,
                description,
                vodFile,
                thumbnailFile,
                highlighted,
                selectedSections.map((section) => {
                    return section && section.id
                })
            )
        } catch (error) {
            console.error('VideoAdd.tsx', error)
        }
    }

    return (
        <div>
            <form
                onSubmit={onSubmit}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <div style={{ margin: '15px' }}>
                    <label htmlFor="_add_vod_title">Title</label>
                    <input
                        id="_add_vod_title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(event: any) => {
                            setTitle(event.target.value)
                        }}
                    />
                </div>
                <div style={{ margin: '15px' }}>
                    <label htmlFor="_add_vod_description">Description</label>
                    <input
                        id="_add_vod_description"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(event: any) => {
                            setDescription(event.target.value)
                        }}
                    />
                </div>
                <div style={{ margin: '15px' }}>
                    <label htmlFor="_add_vod_thumbnail">Video Thumbnail</label>
                    <input
                        id="_add_vod_thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={(event: any) => {
                            setThumbnailFile(event.target.files[0] || null)
                        }}
                    />
                </div>
                <div style={{ margin: '15px' }}>
                    <label htmlFor="_add_vod_highlighted">
                        Highlighted Video
                    </label>
                    <input
                        id="_add_vod_highlighted"
                        type="checkbox"
                        onChange={() => {
                            setHighlighted(!highlighted)
                        }}
                    />
                </div>
                <div style={{ margin: '15px' }}>
                    <label htmlFor="_add_vod_tags">Video Tags</label>
                    {selectedSections.map((section: section | undefined) => {
                        return (
                            <div key={section && section.label}>
                                <span>{section && section.label}</span>
                                <button
                                    onClick={() => {
                                        setSelectedSections(
                                            selectedSections.filter(
                                                (value: section | undefined) =>
                                                    value !== section
                                            )
                                        )
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        )
                    })}
                    <select
                        id="_add_vod_tags"
                        onChange={(event: any) => {
                            const section = existingSections.find(
                                (section) =>
                                    (section && section.label) ===
                                    event.target.value
                            )
                            section !== undefined &&
                                setSelectedSections([
                                    ...selectedSections,
                                    section,
                                ])
                        }}
                    >
                        <option value="">Select a section</option>
                        {existingSections
                            .filter(
                                (section) =>
                                    !selectedSections.find(
                                        (s) =>
                                            s &&
                                            section &&
                                            s.label === section.label
                                    )
                            )
                            .map((section) => {
                                return (
                                    <option
                                        value={section && section.label}
                                        key={section && section.label}
                                    >
                                        {section && section.label}
                                    </option>
                                )
                            })}
                    </select>
                </div>
                <div style={{ margin: '15px' }}>
                    <input type="submit" value="Upload video" />
                </div>
            </form>
        </div>
    )
}

const DashboardVideoAdd = () => {
    const [vodFile, setVodFile] = useState<File | null>(null)

    return (
        <div>
            <h1>Video Add</h1>
            {!vodFile && <DropZone setVodFile={setVodFile} />}
            {vodFile && <VideoAddForm vodFile={vodFile} />}
        </div>
    )
}

export default DashboardVideoAdd
