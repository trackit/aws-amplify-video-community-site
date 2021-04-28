/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVodAssetInput = {
  id?: string | null,
  title: string,
  description: string,
  highlighted: boolean,
  vodAssetVideoId?: string | null,
  vodAssetThumbnailId?: string | null,
};

export type ModelvodAssetConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  highlighted?: ModelBooleanInput | null,
  and?: Array< ModelvodAssetConditionInput | null > | null,
  or?: Array< ModelvodAssetConditionInput | null > | null,
  not?: ModelvodAssetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type vodAsset = {
  __typename: "vodAsset",
  id?: string,
  title?: string,
  description?: string,
  highlighted?: boolean,
  video?: videoObject,
  thumbnail?: thumbnailObject,
  sections?: ModelVideoSectionConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type videoObject = {
  __typename: "videoObject",
  id?: string,
  token?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type thumbnailObject = {
  __typename: "thumbnailObject",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelVideoSectionConnection = {
  __typename: "ModelVideoSectionConnection",
  items?:  Array<VideoSection | null > | null,
  nextToken?: string | null,
};

export type VideoSection = {
  __typename: "VideoSection",
  id?: string,
  sectionID?: string,
  videoID?: string,
  section?: section,
  video?: vodAsset,
  createdAt?: string,
  updatedAt?: string,
};

export type section = {
  __typename: "section",
  id?: string,
  label?: string,
  videos?: ModelVideoSectionConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateVodAssetInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  highlighted?: boolean | null,
  vodAssetVideoId?: string | null,
  vodAssetThumbnailId?: string | null,
};

export type DeleteVodAssetInput = {
  id?: string | null,
};

export type CreateVideoObjectInput = {
  id?: string | null,
  token?: string | null,
};

export type ModelvideoObjectConditionInput = {
  token?: ModelStringInput | null,
  and?: Array< ModelvideoObjectConditionInput | null > | null,
  or?: Array< ModelvideoObjectConditionInput | null > | null,
  not?: ModelvideoObjectConditionInput | null,
};

export type UpdateVideoObjectInput = {
  id: string,
  token?: string | null,
};

export type DeleteVideoObjectInput = {
  id?: string | null,
};

export type CreateThumbnailObjectInput = {
  id?: string | null,
};

export type ModelthumbnailObjectConditionInput = {
  and?: Array< ModelthumbnailObjectConditionInput | null > | null,
  or?: Array< ModelthumbnailObjectConditionInput | null > | null,
  not?: ModelthumbnailObjectConditionInput | null,
};

export type UpdateThumbnailObjectInput = {
  id: string,
};

export type DeleteThumbnailObjectInput = {
  id?: string | null,
};

export type CreateSectionInput = {
  id?: string | null,
  label: string,
};

export type ModelsectionConditionInput = {
  label?: ModelStringInput | null,
  and?: Array< ModelsectionConditionInput | null > | null,
  or?: Array< ModelsectionConditionInput | null > | null,
  not?: ModelsectionConditionInput | null,
};

export type UpdateSectionInput = {
  id: string,
  label?: string | null,
};

export type DeleteSectionInput = {
  id?: string | null,
};

export type CreateVideoSectionInput = {
  id?: string | null,
  sectionID: string,
  videoID: string,
};

export type ModelVideoSectionConditionInput = {
  sectionID?: ModelIDInput | null,
  videoID?: ModelIDInput | null,
  and?: Array< ModelVideoSectionConditionInput | null > | null,
  or?: Array< ModelVideoSectionConditionInput | null > | null,
  not?: ModelVideoSectionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateVideoSectionInput = {
  id: string,
  sectionID?: string | null,
  videoID?: string | null,
};

export type DeleteVideoSectionInput = {
  id?: string | null,
};

export type ModelvodAssetFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  highlighted?: ModelBooleanInput | null,
  and?: Array< ModelvodAssetFilterInput | null > | null,
  or?: Array< ModelvodAssetFilterInput | null > | null,
  not?: ModelvodAssetFilterInput | null,
};

export type ModelvodAssetConnection = {
  __typename: "ModelvodAssetConnection",
  items?:  Array<vodAsset | null > | null,
  nextToken?: string | null,
};

export type ModelvideoObjectFilterInput = {
  id?: ModelIDInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelvideoObjectFilterInput | null > | null,
  or?: Array< ModelvideoObjectFilterInput | null > | null,
  not?: ModelvideoObjectFilterInput | null,
};

export type ModelvideoObjectConnection = {
  __typename: "ModelvideoObjectConnection",
  items?:  Array<videoObject | null > | null,
  nextToken?: string | null,
};

export type ModelthumbnailObjectFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelthumbnailObjectFilterInput | null > | null,
  or?: Array< ModelthumbnailObjectFilterInput | null > | null,
  not?: ModelthumbnailObjectFilterInput | null,
};

export type ModelthumbnailObjectConnection = {
  __typename: "ModelthumbnailObjectConnection",
  items?:  Array<thumbnailObject | null > | null,
  nextToken?: string | null,
};

export type ModelsectionFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelsectionFilterInput | null > | null,
  or?: Array< ModelsectionFilterInput | null > | null,
  not?: ModelsectionFilterInput | null,
};

export type ModelsectionConnection = {
  __typename: "ModelsectionConnection",
  items?:  Array<section | null > | null,
  nextToken?: string | null,
};

export type CreateVodAssetMutationVariables = {
  input?: CreateVodAssetInput,
  condition?: ModelvodAssetConditionInput | null,
};

export type CreateVodAssetMutation = {
  createVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    highlighted: boolean,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    thumbnail?:  {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVodAssetMutationVariables = {
  input?: UpdateVodAssetInput,
  condition?: ModelvodAssetConditionInput | null,
};

export type UpdateVodAssetMutation = {
  updateVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    highlighted: boolean,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    thumbnail?:  {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVodAssetMutationVariables = {
  input?: DeleteVodAssetInput,
  condition?: ModelvodAssetConditionInput | null,
};

export type DeleteVodAssetMutation = {
  deleteVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    highlighted: boolean,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    thumbnail?:  {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVideoObjectMutationVariables = {
  input?: CreateVideoObjectInput,
  condition?: ModelvideoObjectConditionInput | null,
};

export type CreateVideoObjectMutation = {
  createVideoObject?:  {
    __typename: "videoObject",
    id: string,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVideoObjectMutationVariables = {
  input?: UpdateVideoObjectInput,
  condition?: ModelvideoObjectConditionInput | null,
};

export type UpdateVideoObjectMutation = {
  updateVideoObject?:  {
    __typename: "videoObject",
    id: string,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVideoObjectMutationVariables = {
  input?: DeleteVideoObjectInput,
  condition?: ModelvideoObjectConditionInput | null,
};

export type DeleteVideoObjectMutation = {
  deleteVideoObject?:  {
    __typename: "videoObject",
    id: string,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThumbnailObjectMutationVariables = {
  input?: CreateThumbnailObjectInput,
  condition?: ModelthumbnailObjectConditionInput | null,
};

export type CreateThumbnailObjectMutation = {
  createThumbnailObject?:  {
    __typename: "thumbnailObject",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateThumbnailObjectMutationVariables = {
  input?: UpdateThumbnailObjectInput,
  condition?: ModelthumbnailObjectConditionInput | null,
};

export type UpdateThumbnailObjectMutation = {
  updateThumbnailObject?:  {
    __typename: "thumbnailObject",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteThumbnailObjectMutationVariables = {
  input?: DeleteThumbnailObjectInput,
  condition?: ModelthumbnailObjectConditionInput | null,
};

export type DeleteThumbnailObjectMutation = {
  deleteThumbnailObject?:  {
    __typename: "thumbnailObject",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input?: CreateSectionInput,
  condition?: ModelsectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "section",
    id: string,
    label: string,
    videos?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input?: UpdateSectionInput,
  condition?: ModelsectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "section",
    id: string,
    label: string,
    videos?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input?: DeleteSectionInput,
  condition?: ModelsectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "section",
    id: string,
    label: string,
    videos?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVideoSectionMutationVariables = {
  input?: CreateVideoSectionInput,
  condition?: ModelVideoSectionConditionInput | null,
};

export type CreateVideoSectionMutation = {
  createVideoSection?:  {
    __typename: "VideoSection",
    id: string,
    sectionID: string,
    videoID: string,
    section:  {
      __typename: "section",
      id: string,
      label: string,
      videos?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    video:  {
      __typename: "vodAsset",
      id: string,
      title: string,
      description: string,
      highlighted: boolean,
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      thumbnail?:  {
        __typename: "thumbnailObject",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sections?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVideoSectionMutationVariables = {
  input?: UpdateVideoSectionInput,
  condition?: ModelVideoSectionConditionInput | null,
};

export type UpdateVideoSectionMutation = {
  updateVideoSection?:  {
    __typename: "VideoSection",
    id: string,
    sectionID: string,
    videoID: string,
    section:  {
      __typename: "section",
      id: string,
      label: string,
      videos?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    video:  {
      __typename: "vodAsset",
      id: string,
      title: string,
      description: string,
      highlighted: boolean,
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      thumbnail?:  {
        __typename: "thumbnailObject",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sections?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVideoSectionMutationVariables = {
  input?: DeleteVideoSectionInput,
  condition?: ModelVideoSectionConditionInput | null,
};

export type DeleteVideoSectionMutation = {
  deleteVideoSection?:  {
    __typename: "VideoSection",
    id: string,
    sectionID: string,
    videoID: string,
    section:  {
      __typename: "section",
      id: string,
      label: string,
      videos?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    video:  {
      __typename: "vodAsset",
      id: string,
      title: string,
      description: string,
      highlighted: boolean,
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      thumbnail?:  {
        __typename: "thumbnailObject",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sections?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVodAssetQueryVariables = {
  id?: string,
};

export type GetVodAssetQuery = {
  getVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    highlighted: boolean,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    thumbnail?:  {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVodAssetsQueryVariables = {
  filter?: ModelvodAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVodAssetsQuery = {
  listVodAssets?:  {
    __typename: "ModelvodAssetConnection",
    items?:  Array< {
      __typename: "vodAsset",
      id: string,
      title: string,
      description: string,
      highlighted: boolean,
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      thumbnail?:  {
        __typename: "thumbnailObject",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sections?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetVideoObjectQueryVariables = {
  id?: string,
};

export type GetVideoObjectQuery = {
  getVideoObject?:  {
    __typename: "videoObject",
    id: string,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVideoObjectsQueryVariables = {
  filter?: ModelvideoObjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideoObjectsQuery = {
  listVideoObjects?:  {
    __typename: "ModelvideoObjectConnection",
    items?:  Array< {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetThumbnailObjectQueryVariables = {
  id?: string,
};

export type GetThumbnailObjectQuery = {
  getThumbnailObject?:  {
    __typename: "thumbnailObject",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListThumbnailObjectsQueryVariables = {
  filter?: ModelthumbnailObjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThumbnailObjectsQuery = {
  listThumbnailObjects?:  {
    __typename: "ModelthumbnailObjectConnection",
    items?:  Array< {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id?: string,
};

export type GetSectionQuery = {
  getSection?:  {
    __typename: "section",
    id: string,
    label: string,
    videos?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelsectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelsectionConnection",
    items?:  Array< {
      __typename: "section",
      id: string,
      label: string,
      videos?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateVodAssetSubscription = {
  onCreateVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    highlighted: boolean,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    thumbnail?:  {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVodAssetSubscription = {
  onUpdateVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    highlighted: boolean,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    thumbnail?:  {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVodAssetSubscription = {
  onDeleteVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    highlighted: boolean,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    thumbnail?:  {
      __typename: "thumbnailObject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVideoObjectSubscription = {
  onCreateVideoObject?:  {
    __typename: "videoObject",
    id: string,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVideoObjectSubscription = {
  onUpdateVideoObject?:  {
    __typename: "videoObject",
    id: string,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVideoObjectSubscription = {
  onDeleteVideoObject?:  {
    __typename: "videoObject",
    id: string,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThumbnailObjectSubscription = {
  onCreateThumbnailObject?:  {
    __typename: "thumbnailObject",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThumbnailObjectSubscription = {
  onUpdateThumbnailObject?:  {
    __typename: "thumbnailObject",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThumbnailObjectSubscription = {
  onDeleteThumbnailObject?:  {
    __typename: "thumbnailObject",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "section",
    id: string,
    label: string,
    videos?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "section",
    id: string,
    label: string,
    videos?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "section",
    id: string,
    label: string,
    videos?:  {
      __typename: "ModelVideoSectionConnection",
      items?:  Array< {
        __typename: "VideoSection",
        id: string,
        sectionID: string,
        videoID: string,
        section:  {
          __typename: "section",
          id: string,
          label: string,
          createdAt: string,
          updatedAt: string,
        },
        video:  {
          __typename: "vodAsset",
          id: string,
          title: string,
          description: string,
          highlighted: boolean,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVideoSectionSubscription = {
  onCreateVideoSection?:  {
    __typename: "VideoSection",
    id: string,
    sectionID: string,
    videoID: string,
    section:  {
      __typename: "section",
      id: string,
      label: string,
      videos?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    video:  {
      __typename: "vodAsset",
      id: string,
      title: string,
      description: string,
      highlighted: boolean,
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      thumbnail?:  {
        __typename: "thumbnailObject",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sections?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVideoSectionSubscription = {
  onUpdateVideoSection?:  {
    __typename: "VideoSection",
    id: string,
    sectionID: string,
    videoID: string,
    section:  {
      __typename: "section",
      id: string,
      label: string,
      videos?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    video:  {
      __typename: "vodAsset",
      id: string,
      title: string,
      description: string,
      highlighted: boolean,
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      thumbnail?:  {
        __typename: "thumbnailObject",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sections?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVideoSectionSubscription = {
  onDeleteVideoSection?:  {
    __typename: "VideoSection",
    id: string,
    sectionID: string,
    videoID: string,
    section:  {
      __typename: "section",
      id: string,
      label: string,
      videos?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    video:  {
      __typename: "vodAsset",
      id: string,
      title: string,
      description: string,
      highlighted: boolean,
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      thumbnail?:  {
        __typename: "thumbnailObject",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sections?:  {
        __typename: "ModelVideoSectionConnection",
        items?:  Array< {
          __typename: "VideoSection",
          id: string,
          sectionID: string,
          videoID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
