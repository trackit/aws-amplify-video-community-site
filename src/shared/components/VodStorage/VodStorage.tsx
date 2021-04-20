import {API, graphqlOperation, Storage} from "aws-amplify";
import {createThumbnailObject, createVideoObject, createVodAsset} from "../../../graphql/mutations";
import {listVodAssets} from "../../../graphql/queries";
import { uuid } from 'uuidv4';
import awsvideoconfig from "../../../aws-video-exports";
import awsmobile from "../../../aws-exports";
import {GraphQLResult} from "@aws-amplify/api-graphql";

export const uploadVideo = (title: string, description: string, vodFile: any, thumbnailFile: any) => {
    const id = uuid()
    const videoObject = {
        input: {
            id: id,
        }
    }
    const thumbnailObject = {
        input: {
            id: id
        }
    }

    const createThumbnailObjectQuery = API.graphql(graphqlOperation(createThumbnailObject, thumbnailObject)) as Promise<GraphQLResult>
    createThumbnailObjectQuery
        .then((thbResponse: GraphQLResult) => {
        const createVideoObjectQuery = API.graphql(graphqlOperation(createVideoObject, videoObject)) as Promise<GraphQLResult>
        createVideoObjectQuery
            .then((videoResponse: GraphQLResult) => {
                if (videoResponse !== null) {
                    const vodExtension = vodFile.name.toLowerCase().split('.');
                    const thumbnailExtension = thumbnailFile.name.toLowerCase().split('.')
                    const videoAsset = {
                        input: {
                            title: title,
                            description: description,
                            vodAssetVideoId: id,
                            vodAssetThumbnailId: id
                        }
                    }
                    API.graphql(graphqlOperation(createVodAsset, videoAsset))
                    Storage.put(`${id}.${vodExtension[vodExtension.length - 1]}`, vodFile, {
                        bucket: awsvideoconfig.awsInputVideo
                    }).then((res) => {
                        Storage.put(`thumbnails/${id}.${thumbnailExtension[thumbnailExtension.length - 1]}`, thumbnailFile, {
                            bucket: awsmobile.aws_user_files_s3_bucket,
                            level: 'public',
                            customPrefix: {
                                public: 'thumbnails'
                            }
                        })
                            .then((res) => {
                                console.log('thumbnails res:', res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        console.log(res)
                    }).catch((err) => {
                        console.log(err)
                    })
            }
        })
    })
}

export const getFiles = async (nextToken: string) => {
    if (nextToken !== null && nextToken !== '')
        return API.graphql(graphqlOperation(listVodAssets, {nextToken: nextToken}));
    else
        return API.graphql(graphqlOperation(listVodAssets));
}
