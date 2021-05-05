import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import Loader from 'react-loader-spinner'
import { listVodFiles } from '../../shared/components/VodStorage'
import './VodApp.css'
import {
    HighlightedVideo,
    NavBar,
    ThumbnailVideo,
} from '../../shared/components'
import { listVodAssets } from '../../graphql/queries'
import { ModelvodAssetFilterInput } from '../../API'
import { VodAsset } from '../../shared/components/VodStorage/vod.interface'

async function fetchData(nextToken: string | null) {
    const filter: ModelvodAssetFilterInput = {
        highlighted: {
            eq: true,
        },
    }
    const getHighlightedVideos = API.graphql(
        graphqlOperation(listVodAssets, { filter })
    ) as Promise<GraphQLResult>
    getHighlightedVideos.then((data) => {
        console.log('highlightedVideos', data)
    })

    // const sectionsQuery = API.graphql(
    //     graphqlOperation(listSections, { nextToken: '' })
    // ) as Promise<GraphQLResult>
    // sectionsQuery
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err))

    return listVodFiles(nextToken)
}

function renderThumbnails(vodAssets: Array<VodAsset>) {
    if (vodAssets.length > 0)
        return vodAssets.map((asset: VodAsset, key: number) => {
            return <ThumbnailVideo className="item" asset={asset} key={key} />
        })
    return <p>No VoD Files</p>
}

const VodApp = () => {
    const [vodAssets, setVodAssets] = useState<any>([])
    const [nextToken, setNextToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            setLoading(true)
            try {
                const { data } = await fetchData(nextToken)
                console.info('VodFiles: ', data)
                setNextToken(
                    data.listVodAssets.nextToken
                        ? data.listVodAssets.nextToken
                        : null
                )
                setVodAssets(data.listVodAssets.items)
            } catch (error) {
                console.log('error: ', error)
            }
            setLoading(false)
        })()
    }, [nextToken])

    return (
        <div>
            <NavBar />
            <div className="container">
                {loading ? (
                    <Loader
                        type="Bars"
                        color="#FFA41C"
                        height={100}
                        width={100}
                        timeout={3000}
                    />
                ) : (
                    renderThumbnails(vodAssets)
                )}
            </div>
            {vodAssets.length > 0 && <HighlightedVideo asset={vodAssets[0]} />}
        </div>
    )
}

export default VodApp
