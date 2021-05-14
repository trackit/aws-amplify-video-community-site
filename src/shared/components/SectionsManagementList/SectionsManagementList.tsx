import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../../aws-exports'
import { fetchSection } from '../../utilities/fetch'

Amplify.configure(awsmobile)

const SectionsManagementListItem = ({
    section,
    selectedSection,
    setSelectedSection,
}: any) => {
    const [hover, setHover] = useState<boolean>(false)
    const hoverStyles = {
        backgroundColor: '#969696',
        cursor: 'pointer',
    }
    const selectedStyles = {
        backgroundColor: '#E3E3E3',
    }

    return (
        <div>
            <div
                style={{
                    borderBottom: 'solid 1px black',
                    display: 'flex',
                    ...(hover ? hoverStyles : null),
                    ...(selectedSection === section ? selectedStyles : null),
                }}
                onClick={() => {
                    setSelectedSection(section)
                }}
                onMouseEnter={() => {
                    setHover(true)
                }}
                onMouseLeave={() => {
                    setHover(false)
                }}
            >
                <div>
                    <p>{section.label}</p>
                </div>
                <div>
                    <p>{section.createdAt}</p>
                </div>
                <div>
                    <p>{'>'}</p>
                </div>
            </div>
        </div>
    )
}

const SectionVideos = ({ videos }: any) => {
    return (
        <div>
            {videos.length > 0 ? (
                <ul>
                    {videos.map((video: any) => {
                        return (
                            <li>
                                <a href={`/video/${video.video.id}`}>
                                    {video.video.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>There is no videos for this section</p>
            )}
        </div>
    )
}

const CurrentSection = ({ selectedSection }: any) => {
    const [videos, setVideos] = useState(null)

    const deleteSection = () => {
        console.log('delete section ' + selectedSection.id)
    }

    useEffect(() => {
        ;(async () => {
            if (selectedSection.id !== null) {
                const { data }: any = await fetchSection(selectedSection.id)
                setVideos(data.getSection.videos.items)
            }
        })()
    }, [selectedSection])

    return (
        <div>
            <p>Label: {selectedSection.label}</p>
            <p>Videos:</p>
            {videos && <SectionVideos videos={videos} />}
            <button onClick={deleteSection}>Delete Section</button>
        </div>
    )
}

type SectionsManagementListProps = {
    sections: any
}

const SectionsManagementList = ({ sections }: SectionsManagementListProps) => {
    const [selectedSection, setSelectedSection] = useState(null)
    const [searchValue, setSearchValue] = useState('')

    const filterSections = (elem: any) => {
        return elem.label.toLowerCase().includes(searchValue.toLowerCase())
    }

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ padding: '15px' }}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <div style={{ width: '100%' }}>
                            <input
                                type="text"
                                placeholder="Amplify video tutorial"
                                value={searchValue}
                                onChange={(e: any) =>
                                    setSearchValue(e.target.value)
                                }
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    setSearchValue('')
                                }}
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <div>
                        {sections.filter(filterSections).map((elem: any) => {
                            return (
                                <SectionsManagementListItem
                                    key={elem.id}
                                    section={elem}
                                    selectedSection={selectedSection}
                                    setSelectedSection={setSelectedSection}
                                />
                            )
                        })}
                    </div>
                </div>
                <div style={{ padding: '15px' }}>
                    {selectedSection && (
                        <CurrentSection selectedSection={selectedSection} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SectionsManagementList
