import { VodAsset, ListVodAssets } from './vod.interface'
import { fetchSections, fetchThumbnail } from './fetch'
import { fetchVodFiles, fetchHighlightedVideos } from './vod-fetch'
import { uploadVideo } from './vod-mutate'

export {
    fetchVodFiles,
    fetchHighlightedVideos,
    fetchSections,
    uploadVideo,
    fetchThumbnail,
}
export type { VodAsset, ListVodAssets }
