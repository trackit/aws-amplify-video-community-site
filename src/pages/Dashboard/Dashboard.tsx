import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import Amplify, {Auth, Storage, API, graphqlOperation} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import awsmobile from "../../aws-exports";
import awsvideoconfig from "../../aws-video-exports";
import {uploadVideo, getFiles} from "../../shared/components/VodStorage"
import {deleteVideoObject, deleteVodAsset} from "../../graphql/mutations";
import {NavBar} from "../../shared/components";
import {ListVodAssetsQuery, vodAsset} from "../../API";
import {GraphQLResult} from "@aws-amplify/api-graphql";

Amplify.configure(awsmobile)

function GetFiles({func: setVodAssets}: any) {
    const [nextToken, setNextToken] = useState('')

    return (
        <button onClick={() => {
            const getFilesQuery = getFiles(nextToken) as Promise<GraphQLResult>
                getFilesQuery
                .then((data: GraphQLResult) => {
                    console.log(data)
                    if (data.errors === null) {
                        //setNextToken(data.data.nextToken)
                        //setVodAssets(data.data.listVodAssets.items)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }}>Get Files</button>
    )
}

const UploadNewVideo = () => {
    const [title, setTitle] = useState<string|undefined>(undefined)
    const [description, setDescription] = useState<string|undefined>(undefined)
    const [vodFile, setVodFile] = useState<File|null>(null)
    const [thumbnailFile, setThumbnailFile] = useState<File|null>(null)

    const uploadVod = (e: any) => {
        if (vodFile !== null && thumbnailFile !== null && title !== undefined && description !== undefined
            && title !== '' && description !== '') {
            uploadVideo(title, description, vodFile, thumbnailFile)
        }
        e.preventDefault()
    }

    return (
        <form onSubmit={uploadVod}>
            <div>
                <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/></div>
            <div>
                <input type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <input type='file' id='vod_upload' name='vod_upload' onChange={(e) => {
                    if (e.target && e.target.files && e.target.files[0])
                        setVodFile(e.target.files[0])
                    else
                        setVodFile(null)
                }}/>
            </div>
            <div>
                <input type='file' id='thumbnail_upload' name='thumbnail_upload' onChange={(e) => {
                    if (e.target && e.target.files && e.target.files[0])
                        setThumbnailFile(e.target.files[0])
                    else
                        setThumbnailFile(null)
                }}/>
            </div>
            <div>
                <input type='submit' value='Upload Video'/>
            </div>
        </form>
)
}

const Dashboard = () => {
    const history = useHistory()
    const [groups, setGroups] = useState([] as Array<string>)

    useEffect(() => {
        Auth.currentSession()
            .then((data) => {
                const groupsData = data.getIdToken().payload['cognito:groups']
                console.log(data, groupsData)
                if (groupsData !== undefined)
                    setGroups(groupsData)
            })
//        Storage.configure({
//            AWSS3: {
//                bucket: awsvideoconfig.awsInputVideo,
//                region: awsmobile.aws_project_region,
//                customPrefix: {
//                    public: ''
//                }
//            },
//        });
    }, [])

    const [vodAssets, setVodAssets] = useState([])

    const Admin = () => {
        return (
            <div>
                <NavBar/>
            <p>Welcome to the dashboard</p>
        <UploadNewVideo/>
        <GetFiles func={setVodAssets} />
        {
            vodAssets.map((asset: vodAsset, key: number) => {
                const deleteVideo = () => {
                    if (asset.video !== undefined && asset.video !== null) {
                        const deleteVodAssetQuery = API.graphql(graphqlOperation(deleteVodAsset, {input: {id: asset.id}})) as Promise<GraphQLResult>
                        deleteVodAssetQuery
                            .then((data: any) => {
                                API.graphql({query: deleteVideoObject, variables: {input: {id: asset.video?.id}}})
                                //API.graphql({query: deleteThumbnailObject, variables: {input: {id: asset.video?.id}}})
                                Storage.remove(`${asset.video?.id}.mp4`, {bucket: awsvideoconfig.awsInputVideo})
                                    .then(data => console.log(data))
                                    .catch(err => console.log(err))
                                console.log(data)
                                //Storage.remove(`thumbnails/${asset.thumbnail?.id}.jpeg`, {
                                //    bucket: awsmobile.aws_user_files_s3_bucket
                                //})
                                //    .then(data => console.log(data))
                                //    .catch(err => console.log(err))
                            })
                            .catch((err: any) => console.log(err))
                    }
                }

                return (
                    <div>
                        <b>{asset.title}</b>
                    <ul key={key}>
                        <li>{asset.id}</li>
                        <li>{asset.description}</li>
                        <li>{asset.video?.id}</li>
                    </ul>
                    <button onClick={deleteVideo}>Delete video</button>
                </div>
            )
            })
        }
        </div>
    )
    }

    const choosePanel = () => {
        if (groups.includes('Admin')) {
            return Admin()
        } else {
            return (
                <div>
                    <NavBar/>
                <p>Not Authenticated</p>
            </div>
        )
        }
    }
    return choosePanel()
}

export default withAuthenticator(Dashboard, true);
