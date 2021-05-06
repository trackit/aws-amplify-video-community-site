export interface VodAsset {
    id: string
    highlighted: string
    description: string
    createdAt: string
    title: string
    [key: string]: string
}

export interface ListVodAssets {
    data: {
        listVodAssets: {
            items: Array<VodAsset>
            nextToken: string | null
        }
    }
}
