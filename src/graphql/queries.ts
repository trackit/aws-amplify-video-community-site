/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVodAsset = /* GraphQL */ `
  query GetVodAsset($id: ID!) {
    getVodAsset(id: $id) {
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
`;
export const listVodAssets = /* GraphQL */ `
  query ListVodAssets(
    $filter: ModelvodAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVodAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVideoObject = /* GraphQL */ `
  query GetVideoObject($id: ID!) {
    getVideoObject(id: $id) {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const listVideoObjects = /* GraphQL */ `
  query ListVideoObjects(
    $filter: ModelvideoObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        token
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getThumbnailObject = /* GraphQL */ `
  query GetThumbnailObject($id: ID!) {
    getThumbnailObject(id: $id) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const listThumbnailObjects = /* GraphQL */ `
  query ListThumbnailObjects(
    $filter: ModelthumbnailObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThumbnailObjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelsectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
