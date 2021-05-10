import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { listVodAssets } from '../../graphql/queries'
import { ModelvodAssetFilterInput } from '../../API'
import { ListVodAssets } from './vod.interface'

async function fetchVodFiles(nextToken: string | null) {
    if (nextToken !== null && nextToken !== '')
        return API.graphql(
            graphqlOperation(listVodAssets, { nextToken: nextToken })
        ) as Promise<ListVodAssets>
    else
        return API.graphql(
            graphqlOperation(listVodAssets)
        ) as Promise<ListVodAssets>
}

async function fetchHighlightedVideos() {
    const filter: ModelvodAssetFilterInput = {
        highlighted: {
            eq: true,
        },
    }
    return API.graphql(
        graphqlOperation(listVodAssets, { filter })
    ) as Promise<GraphQLResult>
}

export { fetchVodFiles, fetchHighlightedVideos }
