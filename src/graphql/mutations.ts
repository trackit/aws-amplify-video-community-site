/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVodAsset = /* GraphQL */ `
  mutation CreateVodAsset(
    $input: CreateVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    createVodAsset(input: $input, condition: $condition) {
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
      section {
        items {
          id
          label
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateVodAsset = /* GraphQL */ `
  mutation UpdateVodAsset(
    $input: UpdateVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    updateVodAsset(input: $input, condition: $condition) {
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
      section {
        items {
          id
          label
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteVodAsset = /* GraphQL */ `
  mutation DeleteVodAsset(
    $input: DeleteVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    deleteVodAsset(input: $input, condition: $condition) {
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
      section {
        items {
          id
          label
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createVideoObject = /* GraphQL */ `
  mutation CreateVideoObject(
    $input: CreateVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    createVideoObject(input: $input, condition: $condition) {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const updateVideoObject = /* GraphQL */ `
  mutation UpdateVideoObject(
    $input: UpdateVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    updateVideoObject(input: $input, condition: $condition) {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideoObject = /* GraphQL */ `
  mutation DeleteVideoObject(
    $input: DeleteVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    deleteVideoObject(input: $input, condition: $condition) {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const createThumbnailObject = /* GraphQL */ `
  mutation CreateThumbnailObject(
    $input: CreateThumbnailObjectInput!
    $condition: ModelthumbnailObjectConditionInput
  ) {
    createThumbnailObject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateThumbnailObject = /* GraphQL */ `
  mutation UpdateThumbnailObject(
    $input: UpdateThumbnailObjectInput!
    $condition: ModelthumbnailObjectConditionInput
  ) {
    updateThumbnailObject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteThumbnailObject = /* GraphQL */ `
  mutation DeleteThumbnailObject(
    $input: DeleteThumbnailObjectInput!
    $condition: ModelthumbnailObjectConditionInput
  ) {
    deleteThumbnailObject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelsectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
    }
  }
`;
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelsectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
    }
  }
`;
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelsectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
    }
  }
`;
