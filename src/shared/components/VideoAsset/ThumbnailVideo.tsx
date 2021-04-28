import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Storage} from "aws-amplify";
import awsmobile from "../../../aws-exports";

const ThumbnailVideo = ({asset, className}: any) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('')
    const history = useHistory()

    useEffect(() => {
        if (asset.thumbnail) {
            console.log(asset.thumbnail.id)
            Storage.get(`thumbnails/${asset.thumbnail.id}.jpeg`, {
                bucket: awsmobile.aws_user_files_s3_bucket,
                customPrefix: {
                    public: ''
                }
            })
                .then((data: any) => {
                    console.log(asset, data)
                    setThumbnailUrl(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    const redirectVideoPage = () => {
        history.push(`/video/${asset.id}`)
    }

    return (
        <div onClick={redirectVideoPage} className={className ? className : ''}>
            {asset.title}
            {
                thumbnailUrl !== '' &&
                <img src={thumbnailUrl} alt={asset.title}/>
            }
        </div>
    )
}

export default ThumbnailVideo;