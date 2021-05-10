import { API, graphqlOperation, Storage } from 'aws-amplify'
import {
    createThumbnailObject,
    createVideoObject,
    createVideoSection,
    createVodAsset,
} from '../../graphql/mutations'
import { v4 as uuidv4 } from 'uuid'
import awsvideoconfig from '../../aws-video-exports'
import awsmobile from '../../aws-exports'
import { CreateVodAssetInput } from '../../API'

const setVideoSections = async (videoSection: {
    videoID: string
    sectionID: string | undefined
}) => {
    return API.graphql(
        graphqlOperation(createVideoSection, {
            input: {
                ...videoSection,
            },
        })
    )
}

const createVideoAsset = async (payload: CreateVodAssetInput) => {
    return API.graphql(
        graphqlOperation(createVodAsset, {
            input: {
                ...payload,
            },
        })
    )
}

const uploadVideo = async (
    title: string,
    description: string,
    vodFile: any,
    thumbnailFile: any,
    highlighted: boolean,
    sectionsId: (undefined | string)[]
) => {
    const id = uuidv4()
    const vodExtension = vodFile.name.toLowerCase().split('.')
    const thumbnailExtension = thumbnailFile.name.toLowerCase().split('.')
    try {
        await API.graphql(
            graphqlOperation(createThumbnailObject, {
                input: {
                    id: id,
                    ext: thumbnailExtension[thumbnailExtension.length - 1],
                },
            })
        )
    } catch (error) {
        console.error('vod-mutate(createThumbnail): ', error)
        return
    }
    try {
        await API.graphql(
            graphqlOperation(createVideoObject, {
                input: {
                    id: id,
                },
            })
        )
    } catch (error) {
        console.error('vod-mutate(createVideo): ', error)
        return
    }

    try {
        const data: any = await createVideoAsset({
            title: title,
            description: description,
            vodAssetVideoId: id,
            vodAssetThumbnailId: id,
            highlighted: highlighted,
        })
        for (let i = 0; i < sectionsId.length; i++) {
            await setVideoSections({
                sectionID: sectionsId[i],
                videoID: data.data.createVodAsset.id,
            })
        }
    } catch (error) {
        console.error('vod-mutate(createVodAsset): ', error)
        return
    }

    try {
        await Storage.put(
            `${id}.${vodExtension[vodExtension.length - 1]}`,
            vodFile,
            {
                bucket: awsvideoconfig.awsInputVideo,
                region: awsmobile.aws_project_region,
                customPrefix: {
                    public: '',
                },
                progressCallback(progress: any) {
                    console.log(
                        `vodFile Uploaded: ${progress.loaded}/${progress.total}`
                    )
                },
            }
        )
    } catch (error) {
        console.error('vod-mutate(storage put vod file): ', error)
        return
    }

    try {
        await Storage.put(
            `thumbnails/${id}.${
                thumbnailExtension[thumbnailExtension.length - 1]
            }`,
            thumbnailFile,
            {
                bucket: awsmobile.aws_user_files_s3_bucket,
                level: 'public',
                customPrefix: {
                    public: '',
                },
                progressCallback(progress: any) {
                    console.log(
                        `thumbnailFile Uploaded: ${progress.loaded}/${progress.total}`
                    )
                },
            }
        )
    } catch (error) {
        console.error('vod-mutate(storage put thumbnail file): ', error)
        return
    }
}

export { uploadVideo, setVideoSections, createVideoAsset }
