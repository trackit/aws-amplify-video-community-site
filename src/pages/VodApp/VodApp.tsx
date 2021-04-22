import React, {useEffect, useState} from "react";
import { withAuthenticator } from 'aws-amplify-react';
import {getFiles} from "../../shared/components/VodStorage";
import {Storage} from "aws-amplify";
import awsmobile from "../../aws-exports";
import './VodApp.css'
import {NavBar} from "../../shared/components";
import {useHistory} from "react-router-dom";

const ThumbnailCard = ({asset}: any, key: number) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('')
    const history = useHistory()

    useEffect(() => {
        if (asset.thumbnail) {
            console.log(asset.thumbnail.id)
            /*Storage.get(`thumbnails/${asset.thumbnail.id}.jpeg`, {
                bucket: awsmobile.aws_user_files_s3_bucket,
                customPrefix: {
                    public: 'thumbnails'
                }
            })
                .then((data: any) => {
                    console.log(asset, data)
                    setThumbnailUrl(data)
                })
                .catch((err) => {
                    console.log(err)
                })*/
        }
    }, [])

    const redirectVideoPage = () => {
        history.push(`/video/${asset.id}`)
    }

    return (
        <div className='item' onClick={redirectVideoPage}>
            {asset.title}
            {
                thumbnailUrl !== '' &&
                    <img src={thumbnailUrl} alt={asset.title}/>
            }
            {
                //videoUrl === true &&
                //<VideoPlayer
                //    controls
                //    sources={[{
                //        src: `https://${awsvideoconfig.awsOutputVideo}/${asset.video.id}/${asset.video.id}.m3u8`,
                //        type: 'application/x-mpegURL'
                //    }]}
                //   width={720}
                //    height={420}
                //    token={asset.video.token}
                ///>
            }
        </div>
    )
}

const VodApp = () => {
    const [vodAssets, setVodAssets] = useState([])
    const [nextToken, setNextToken] = useState('')

    useEffect(() => {
        getFiles(nextToken)
            .then((data: any) => {
                console.log(data.data.listVodAssets)
                setNextToken(data.data.nextToken)
                setVodAssets(data.data.listVodAssets.items)
            })
            .catch((err: any) => {
                console.log(err)
            })

        /*Storage.configure({
            AWSS3: {
                bucket: awsmobile.aws_user_files_s3_bucket,
                region: awsmobile.aws_user_files_s3_bucket_region,
            },
        });
        Storage.list('./thumbnails', {
            bucket: awsmobile.aws_user_files_s3_bucket,
            region: awsmobile.aws_user_files_s3_bucket_region
        })
            .then(result => console.log(result))
            .catch(err => console.log(err))*/
    }, [])

    return (
        <div>
            <NavBar/>
            <p>Welcome to the <b>TrackIt VodApp</b>.</p>
            <div className='container'>
            {
                vodAssets.map((asset, key) => {
                    return <ThumbnailCard asset={asset} key={key}/>
                })
            }
            </div>
        </div>
    )
}

export default withAuthenticator(VodApp, true);
