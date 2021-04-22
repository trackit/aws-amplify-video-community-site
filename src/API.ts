/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVodAssetInput = {
  id?: string | null,
  title: string,
  description: string,
  vodAssetVideoId?: string | null,
};

export type ModelvodAssetConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
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

export type vodAsset = {
  __typename: "vodAsset",
  id?: string,
  title?: string,
  description?: string,
  video?: videoObject,
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

export type UpdateVodAssetInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  vodAssetVideoId?: string | null,
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

export type ModelvodAssetFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelvodAssetFilterInput | null > | null,
  or?: Array< ModelvodAssetFilterInput | null > | null,
  not?: ModelvodAssetFilterInput | null,
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
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
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
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
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
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
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

export type GetVodAssetQueryVariables = {
  id?: string,
};

export type GetVodAssetQuery = {
  getVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
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
      video?:  {
        __typename: "videoObject",
        id: string,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
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

export type OnCreateVodAssetSubscription = {
  onCreateVodAsset?:  {
    __typename: "vodAsset",
    id: string,
    title: string,
    description: string,
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
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
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
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
    video?:  {
      __typename: "videoObject",
      id: string,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
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
