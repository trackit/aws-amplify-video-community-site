import { API, graphqlOperation, Storage } from 'aws-amplify'
import { getSection, listSections } from '../../graphql/queries'
import awsmobile from '../../aws-exports'

async function fetchSections(nextToken: string | null) {
    if (nextToken !== null && nextToken !== '')
        return API.graphql(
            graphqlOperation(listSections, { nexToken: nextToken })
        )
    else return API.graphql(graphqlOperation(listSections))
}

async function fetchSection(id: string | null) {
    return API.graphql(graphqlOperation(getSection, { input: { id } }))
}

async function fetchThumbnail(asset: any) {
    return Storage.get(`thumbnails/${asset.thumbnail.id}.jpeg`, {
        bucket: awsmobile.aws_user_files_s3_bucket,
        customPrefix: {
            public: '',
        },
    })
}

export { fetchSection, fetchSections, fetchThumbnail }
