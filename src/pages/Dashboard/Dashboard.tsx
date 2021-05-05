import React, { useEffect, useState } from 'react'
import Amplify, { Auth, Storage, API, graphqlOperation } from 'aws-amplify'

import awsmobile from '../../aws-exports'
import awsvideoconfig from '../../aws-video-exports'
import {
    uploadVideo,
    listVodFiles,
    listVodSections,
} from '../../shared/components/VodStorage'
import {
    deleteThumbnailObject,
    deleteVideoObject,
    deleteVodAsset,
} from '../../graphql/mutations'
import { NavBar } from '../../shared/components'
import { vodAsset } from '../../API'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { createVodSection } from '../../shared/components/VodStorage/VodStorage'

Amplify.configure(awsmobile)

function GetFiles({ func: setVodAssets }: any) {
    const [nextToken, setNextToken] = useState('')

    return (
        <button
            onClick={() => {
                const getFilesQuery = listVodFiles(
                    nextToken
                ) as Promise<GraphQLResult>
                getFilesQuery
                    .then((data: any) => {
                        console.log(data)
                        if (data.errors === undefined) {
                            setNextToken(data.data?.listVodAssets.nextToken)
                            setVodAssets(data.data?.listVodAssets.items)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }}
        >
            Get Files
        </button>
    )
}

const UploadNewVideo = () => {
    const [title, setTitle] = useState<string | undefined>(undefined)
    const [description, setDescription] = useState<string | undefined>(
        undefined
    )
    const [vodFile, setVodFile] = useState<File | null>(null)
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
    const [highlighted, setHighlighted] = useState<boolean>(false)
    const [section, setSection] = useState<any | null>(null)
    const [sections, setSections] = useState<Array<any> | null>(null)
    const [nextToken, setToken] = useState<string>('')

    const retrieveSections = () => {
        listVodSections(nextToken)
            .then((data: any) => {
                console.log(data)
                if (
                    sections === null ||
                    nextToken === '' ||
                    nextToken === null
                ) {
                    setSections(data.data.listSections.items)
                } else setSections([...sections, data.data.listSections.items])
                setToken(data.data.listSections.nextToken)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const retrieveSectionObject = (element: string) => {
        if (sections === undefined || sections === null) {
            return null
        }
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].label === element) {
                return sections[i]
            }
        }
        return null
    }

    useEffect(() => {
        retrieveSections()
    })

    useEffect(() => {
        console.log(sections)
        console.log(section)
    }, [sections, section])

    const uploadVod = (e: any) => {
        if (
            vodFile !== null &&
            thumbnailFile !== null &&
            title !== undefined &&
            description !== undefined &&
            title !== '' &&
            description !== '' &&
            section !== null
        ) {
            uploadVideo(
                title,
                description,
                vodFile,
                thumbnailFile,
                highlighted,
                [section.id]
            ) // todo: we should already have an array of section ids
        }
        e.preventDefault()
    }

    return (
        <form onSubmit={uploadVod}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="file"
                    id="vod_upload"
                    name="vod_upload"
                    onChange={(e) => {
                        if (e.target && e.target.files && e.target.files[0])
                            setVodFile(e.target.files[0])
                        else setVodFile(null)
                    }}
                />
            </div>
            <div>
                <input
                    type="file"
                    id="thumbnail_upload"
                    name="thumbnail_upload"
                    onChange={(e) => {
                        if (e.target && e.target.files && e.target.files[0])
                            setThumbnailFile(e.target.files[0])
                        else setThumbnailFile(null)
                    }}
                />
            </div>
            <div>
                <label htmlFor="highlighted">Highlighted</label>
                <input
                    id="highlighted"
                    type="checkbox"
                    onChange={() => {
                        setHighlighted(!highlighted)
                    }}
                />
            </div>
            <div>
                <label htmlFor="_sections">Section</label>
                <input
                    id="_sections"
                    list="sections"
                    onChange={(e) => {
                        const sectionObject = retrieveSectionObject(
                            e.target.value
                        )
                        setSection(sectionObject)
                    }}
                />
                <datalist
                    id="sections"
                    onChange={(e: any) => {
                        console.log(e.target.value)
                    }}
                >
                    {sections !== null &&
                        sections.map((section: any, key: number) => {
                            return <option key={key} value={section.label} />
                        })}
                </datalist>
            </div>
            <div>
                <input type="submit" value="Upload Video" />
            </div>
        </form>
    )
}

const CreateSection = () => {
    const [newSection, setNewSection] = useState<string>('')

    const createNewSection = (e: any) => {
        if (newSection !== '') {
            createVodSection(newSection)
                .then((data) => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        e.preventDefault()
    }

    return (
        <form onSubmit={createNewSection}>
            <label htmlFor="new-section">or create a new one</label>
            <input
                id="new-section"
                type="text"
                onChange={(e) => setNewSection(e.target.value)}
            />
            <input type="submit" value="Add new section" />
        </form>
    )
}

const Dashboard = () => {
    const [groups, setGroups] = useState([] as Array<string>)

    useEffect(() => {
        Auth.currentSession().then((data) => {
            const groupsData = data.getIdToken().payload['cognito:groups']
            console.log(data, groupsData)
            if (groupsData !== undefined) setGroups(groupsData)
        })
    }, [])

    const [vodAssets, setVodAssets] = useState([])

    useEffect(() => {
        console.log(vodAssets)
    }, [vodAssets])

    const Admin = () => {
        return (
            <div>
                <NavBar />
                <p>Welcome to the dashboard</p>
                <UploadNewVideo />
                <CreateSection />
                <GetFiles func={setVodAssets} />
                {vodAssets.map((asset: vodAsset, key: number) => {
                    const deleteVideo = () => {
                        if (asset.video !== undefined && asset.video !== null) {
                            const deleteVodAssetQuery = API.graphql(
                                graphqlOperation(deleteVodAsset, {
                                    input: { id: asset.id },
                                })
                            ) as Promise<GraphQLResult>
                            deleteVodAssetQuery
                                .then((data: any) => {
                                    API.graphql({
                                        query: deleteVideoObject,
                                        variables: {
                                            input: { id: asset.video?.id },
                                        },
                                    })
                                    API.graphql({
                                        query: deleteThumbnailObject,
                                        variables: {
                                            input: { id: asset.video?.id },
                                        },
                                    })
                                    Storage.remove(`${asset.video?.id}.mp4`, {
                                        bucket: awsvideoconfig.awsInputVideo,
                                    })
                                        .then((data) => console.log(data))
                                        .catch((err) => console.log(err))
                                    console.log(data)
                                    Storage.remove(
                                        `thumbnails/${asset.thumbnail?.id}.jpeg`,
                                        {
                                            bucket:
                                                awsmobile.aws_user_files_s3_bucket,
                                            customPrefix: {
                                                public: '',
                                            },
                                        }
                                    )
                                        .then((data) => console.log(data))
                                        .catch((err) => console.log(err))
                                })
                                .catch((err: any) => console.log(err))
                        }
                    }

                    return (
                        <div key={key}>
                            <b>{asset.title}</b>
                            <ul key={key}>
                                <li>{asset.id}</li>
                                <li>{asset.description}</li>
                                <li>{asset.video?.id}</li>
                            </ul>
                            <button onClick={deleteVideo}>Delete video</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    const choosePanel = () => {
        if (groups.includes('Admin')) {
            return Admin()
        } else {
            return (
                <div>
                    <NavBar />
                    <p>Not Authenticated</p>
                </div>
            )
        }
    }
    return choosePanel()
}

export default Dashboard
