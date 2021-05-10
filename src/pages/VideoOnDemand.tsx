import Loader from 'react-loader-spinner'
import { useEffect, useState } from 'react'
import { fetchSections, fetchVodFiles, VodAsset } from '../shared/utilities'
import { Slider, Item } from '../shared/components/VideoSlider'
import { NavBar } from '../shared/components'
import styled from 'styled-components'

function renderThumbnails(vodAssets: Array<VodAsset>) {
    if (vodAssets.length > 0)
        return vodAssets.map((movie: any) => (
            <Item movie={movie} key={movie.id} />
        ))
    return <p>No VoD Files</p>
}

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SectionItem = styled.div`
    div {
        h1 {
            margin-left: 20px;
        }
    }
`

const VodApp = () => {
    const [vodAssets, setVodAssets] = useState<any>([])
    const [sections, setSections] = useState<Array<any> | null>(null)
    const [nextTokenVodFiles, setNextTokenVodFiles] = useState<string | null>(
        null
    )
    const [nextTokenSections, setNextTokenSections] = useState<string | null>(
        null
    )
    const [loadingVodFiles, setLoadingVodFiles] = useState(false)
    const [loadingSections, setLoadingSections] = useState(false)

    useEffect(() => {
        ;(async () => {
            setLoadingVodFiles(true)
            try {
                const { data } = await fetchVodFiles(nextTokenVodFiles)
                setNextTokenVodFiles(
                    data.listVodAssets.nextToken
                        ? data.listVodAssets.nextToken
                        : null
                )
                setVodAssets(data.listVodAssets.items)
                console.log('fetchVodFiles: ', data)
            } catch (error) {
                console.error('VideoOnDemand.tsx ', error)
            }
            setLoadingVodFiles(false)
        })()
    }, [nextTokenVodFiles])

    useEffect(() => {
        ;(async () => {
            setLoadingSections(true)
            try {
                // TODO: declare fetchSection return type
                const { data }: any = await fetchSections(nextTokenSections)
                setNextTokenSections(
                    data.listSections.nextToken
                        ? data.listSections.nextToken
                        : null
                )
                let nonce = true
                data.listSections.items.forEach(
                    (item: any, index: number, arr: any) => {
                        if (arr.length <= 3 && nonce) {
                            arr.push({
                                label: 'Highlighted',
                                id: `Highlighted${index}`,
                            })
                            nonce = false
                        }
                        if (
                            index % 3 === 0 &&
                            index !== 0 &&
                            item.label !== 'Highlighted'
                        ) {
                            arr.splice(index, 0, {
                                label: 'Highlighted',
                                id: `Highlighted${index}`,
                            })
                        }
                    }
                )
                setSections(data.listSections.items)
                console.log('fetchSections: ', data)
            } catch (error) {
                console.error('VideoOnDemand.tsx ', error)
            }
            setLoadingSections(false)
        })()
    }, [nextTokenSections])

    return (
        <div>
            <NavBar />
            {/* TODO: Render each categories vertically */}
            {loadingVodFiles || loadingSections ? (
                <Loader
                    type="Bars"
                    color="#FFA41C"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            ) : (
                <SectionContainer>
                    {sections &&
                        sections.map((section: any) => {
                            return (
                                <SectionItem key={section.id}>
                                    {section.label === 'Highlighted' ? (
                                        <div key={section.label}>
                                            <h1>{section.label}</h1>
                                            <Slider>
                                                {renderThumbnails(
                                                    vodAssets.filter(
                                                        (item: any) =>
                                                            item.highlighted
                                                    )
                                                )}
                                            </Slider>
                                        </div>
                                    ) : (
                                        <div key={section.label}>
                                            <h1>{section.label}</h1>
                                            <Slider>
                                                {renderThumbnails(vodAssets)}
                                            </Slider>
                                        </div>
                                    )}
                                </SectionItem>
                            )
                        })}
                </SectionContainer>
            )}
        </div>
    )
}

export default VodApp
