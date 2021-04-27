import {API, graphqlOperation, Storage} from "aws-amplify";
import {
    createSection,
    createThumbnailObject,
    createVideoObject,
    createVodAsset,
    deleteSection
} from "../../../graphql/mutations";
import {listSections, listVodAssets} from "../../../graphql/queries";
import { v4 as uuidv4 } from 'uuid';
import awsvideoconfig from "../../../aws-video-exports";
import awsmobile from "../../../aws-exports";
import {GraphQLResult} from "@aws-amplify/api-graphql";
import {CreateSectionInput, DeleteSectionInput} from "../../../API";

export const uploadVideo = (title: string, description: string, vodFile: any, thumbnailFile: any, highlighted: boolean, sectionId: string) => {
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
                            vodAssetThumbnailId: id,
                            vodAssetSectionId: sectionId,
                            highlighted: highlighted
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
                        Storage.put(`thumbnails/${id}.${thumbnailExtension[thumbnailExtension.length - 1]}`, thumbnailFile, {
                            bucket: awsmobile.aws_user_files_s3_bucket,
                            level: 'public',
                            customPrefix: {
                                public: ''
                            }
                        })
                            .then((res) => {
                                console.log('thumbnails res:', res)
                            })
                            .catch((err) => {
                                console.log('thumbnail err:', err)
                            })
                    }).catch((err) => {
                        console.log('storage put err:', err)
                    })
            }
        })
    })
}

export const listVodFiles = async (nextToken: string) => {
    if (nextToken !== null && nextToken !== '')
        return API.graphql(graphqlOperation(listVodAssets, {nextToken: nextToken}));
    else
        return API.graphql(graphqlOperation(listVodAssets));
}

export const listVodSections = async (nextToken: string) => {
    if (nextToken !== null && nextToken !== '')
        return API.graphql(graphqlOperation(listSections, {nexToken: nextToken}));
    else
        return API.graphql(graphqlOperation(listSections));
}

export const createVodSection = async (name: string) => {
    const input : CreateSectionInput = {
        label: name
    }
    return API.graphql(graphqlOperation(createSection, {input: input}))
}

export const deleteVodSection = async (id: any) => {
    const input : DeleteSectionInput = {
        id: id
    }
    return API.graphql(graphqlOperation(deleteSection, {input: input}))
}
