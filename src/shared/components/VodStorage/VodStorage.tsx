import {API, graphqlOperation, Storage} from "aws-amplify";
import {createVideoObject, createVodAsset} from "../../../graphql/mutations";
import {listVodAssets} from "../../../graphql/queries";
import { v4 as uuidv4 } from 'uuid';
import awsvideoconfig from "../../../aws-video-exports";
import awsmobile from "../../../aws-exports";
import {GraphQLResult} from "@aws-amplify/api-graphql";

export const uploadVideo = (title: string, description: string, vodFile: any, thumbnailFile: any) => {
    const id = uuidv4()
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

    //const createThumbnailObjectQuery = API.graphql(graphqlOperation(createThumbnailObject, thumbnailObject)) as Promise<GraphQLResult>
    //createThumbnailObjectQuery
    //    .then((thbResponse: GraphQLResult) => {
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
//                            vodAssetThumbnailId: id
                        }
                    }
                    API.graphql(graphqlOperation(createVodAsset, videoAsset))
                    Storage.put(`${id}.${vodExtension[vodExtension.length - 1]}`, vodFile, {
                        bucket: awsvideoconfig.awsInputVideo,
                        region: awsmobile.aws_project_region,
                        customPrefix: {
                            public: ''
                        }
                    }).then((res) => {
                        console.log('storage put:', res)
                        //Storage.put(`thumbnails/${id}.${thumbnailExtension[thumbnailExtension.length - 1]}`, thumbnailFile, {
                        //    bucket: awsmobile.aws_user_files_s3_bucket,
                        //    level: 'public',
                        //    customPrefix: {
                        //        public: 'thumbnails'
                        //    }
                        //})
                        //    .then((res) => {
                        //        console.log('thumbnails res:', res)
                        //    })
                        //    .catch((err) => {
                        //        console.log('thumbnail err:', err)
                        //    })
                    }).catch((err) => {
                        console.log('storage put err:', err)
                    })
            }
        })
    //})
}

export const getFiles = async (nextToken: string) => {
    if (nextToken !== null && nextToken !== '')
        return API.graphql(graphqlOperation(listVodAssets, {nextToken: nextToken}));
    else
        return API.graphql(graphqlOperation(listVodAssets));
}
