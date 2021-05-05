/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVodAsset = /* GraphQL */ `
    subscription OnCreateVodAsset {
        onCreateVodAsset {
            id
            title
            description
            highlighted
            video {
                id
                token
                createdAt
                updatedAt
            }
            thumbnail {
                id
                createdAt
                updatedAt
            }
            sections {
                items {
                    id
                    sectionID
                    videoID
                    section {
                        id
                        label
                        createdAt
                        updatedAt
                    }
                    video {
                        id
                        title
                        description
                        highlighted
                        createdAt
                        updatedAt
                    }
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`
export const onUpdateVodAsset = /* GraphQL */ `
    subscription OnUpdateVodAsset {
        onUpdateVodAsset {
            id
            title
            description
            highlighted
            video {
                id
                token
                createdAt
                updatedAt
            }
            thumbnail {
                id
                createdAt
                updatedAt
            }
            sections {
                items {
                    id
                    sectionID
                    videoID
                    section {
                        id
                        label
                        createdAt
                        updatedAt
                    }
                    video {
                        id
                        title
                        description
                        highlighted
                        createdAt
                        updatedAt
                    }
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`
export const onDeleteVodAsset = /* GraphQL */ `
    subscription OnDeleteVodAsset {
        onDeleteVodAsset {
            id
            title
            description
            highlighted
            video {
                id
                token
                createdAt
                updatedAt
            }
            thumbnail {
                id
                createdAt
                updatedAt
            }
            sections {
                items {
                    id
                    sectionID
                    videoID
                    section {
                        id
                        label
                        createdAt
                        updatedAt
                    }
                    video {
                        id
                        title
                        description
                        highlighted
                        createdAt
                        updatedAt
                    }
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`
export const onCreateVideoObject = /* GraphQL */ `
    subscription OnCreateVideoObject {
        onCreateVideoObject {
            id
            token
            createdAt
            updatedAt
        }
    }
`
export const onUpdateVideoObject = /* GraphQL */ `
    subscription OnUpdateVideoObject {
        onUpdateVideoObject {
            id
            token
            createdAt
            updatedAt
        }
    }
`
export const onDeleteVideoObject = /* GraphQL */ `
    subscription OnDeleteVideoObject {
        onDeleteVideoObject {
            id
            token
            createdAt
            updatedAt
        }
    }
`
export const onCreateThumbnailObject = /* GraphQL */ `
    subscription OnCreateThumbnailObject {
        onCreateThumbnailObject {
            id
            createdAt
            updatedAt
        }
    }
`
export const onUpdateThumbnailObject = /* GraphQL */ `
    subscription OnUpdateThumbnailObject {
        onUpdateThumbnailObject {
            id
            createdAt
            updatedAt
        }
    }
`
export const onDeleteThumbnailObject = /* GraphQL */ `
    subscription OnDeleteThumbnailObject {
        onDeleteThumbnailObject {
            id
            createdAt
            updatedAt
        }
    }
`
export const onCreateSection = /* GraphQL */ `
    subscription OnCreateSection {
        onCreateSection {
            id
            label
            videos {
                items {
                    id
                    sectionID
                    videoID
                    section {
                        id
                        label
                        createdAt
                        updatedAt
                    }
                    video {
                        id
                        title
                        description
                        highlighted
                        createdAt
                        updatedAt
                    }
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`
export const onUpdateSection = /* GraphQL */ `
    subscription OnUpdateSection {
        onUpdateSection {
            id
            label
            videos {
                items {
                    id
                    sectionID
                    videoID
                    section {
                        id
                        label
                        createdAt
                        updatedAt
                    }
                    video {
                        id
                        title
                        description
                        highlighted
                        createdAt
                        updatedAt
                    }
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`
export const onDeleteSection = /* GraphQL */ `
    subscription OnDeleteSection {
        onDeleteSection {
            id
            label
            videos {
                items {
                    id
                    sectionID
                    videoID
                    section {
                        id
                        label
                        createdAt
                        updatedAt
                    }
                    video {
                        id
                        title
                        description
                        highlighted
                        createdAt
                        updatedAt
                    }
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`
export const onCreateVideoSection = /* GraphQL */ `
    subscription OnCreateVideoSection {
        onCreateVideoSection {
            id
            sectionID
            videoID
            section {
                id
                label
                videos {
                    items {
                        id
                        sectionID
                        videoID
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            video {
                id
                title
                description
                highlighted
                video {
                    id
                    token
                    createdAt
                    updatedAt
                }
                thumbnail {
                    id
                    createdAt
                    updatedAt
                }
                sections {
                    items {
                        id
                        sectionID
                        videoID
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`
export const onUpdateVideoSection = /* GraphQL */ `
    subscription OnUpdateVideoSection {
        onUpdateVideoSection {
            id
            sectionID
            videoID
            section {
                id
                label
                videos {
                    items {
                        id
                        sectionID
                        videoID
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            video {
                id
                title
                description
                highlighted
                video {
                    id
                    token
                    createdAt
                    updatedAt
                }
                thumbnail {
                    id
                    createdAt
                    updatedAt
                }
                sections {
                    items {
                        id
                        sectionID
                        videoID
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`
export const onDeleteVideoSection = /* GraphQL */ `
    subscription OnDeleteVideoSection {
        onDeleteVideoSection {
            id
            sectionID
            videoID
            section {
                id
                label
                videos {
                    items {
                        id
                        sectionID
                        videoID
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            video {
                id
                title
                description
                highlighted
                video {
                    id
                    token
                    createdAt
                    updatedAt
                }
                thumbnail {
                    id
                    createdAt
                    updatedAt
                }
                sections {
                    items {
                        id
                        sectionID
                        videoID
                        createdAt
                        updatedAt
                    }
                    nextToken
                }
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`
