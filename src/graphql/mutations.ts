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
  }
`;
export const createVideoSection = /* GraphQL */ `
  mutation CreateVideoSection(
    $input: CreateVideoSectionInput!
    $condition: ModelVideoSectionConditionInput
  ) {
    createVideoSection(input: $input, condition: $condition) {
      id
      sectionID
      videoID
      section {
        id
        label
        videos {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateVideoSection = /* GraphQL */ `
  mutation UpdateVideoSection(
    $input: UpdateVideoSectionInput!
    $condition: ModelVideoSectionConditionInput
  ) {
    updateVideoSection(input: $input, condition: $condition) {
      id
      sectionID
      videoID
      section {
        id
        label
        videos {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideoSection = /* GraphQL */ `
  mutation DeleteVideoSection(
    $input: DeleteVideoSectionInput!
    $condition: ModelVideoSectionConditionInput
  ) {
    deleteVideoSection(input: $input, condition: $condition) {
      id
      sectionID
      videoID
      section {
        id
        label
        videos {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
