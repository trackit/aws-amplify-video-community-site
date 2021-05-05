import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Storage } from 'aws-amplify'
import Loader from 'react-loader-spinner'
import awsmobile from '../../../aws-exports'

async function fetchThumbnail(asset: any) {
    return Storage.get(`thumbnails/${asset.thumbnail.id}.jpeg`, {
        bucket: awsmobile.aws_user_files_s3_bucket,
        customPrefix: {
            public: '',
        },
    })
}

const ThumbnailVideo = ({ asset, className }: any) => {
    const [thumbnailUrl, setThumbnailUrl] = useState<Object | string>('')
    const history = useHistory()

    useEffect(() => {
        ;(async () => {
            if (asset.thumbnail) {
                const data = await fetchThumbnail(asset)
                setThumbnailUrl(data)
            }
        })()
    })

    const redirectVideoPage = () => {
        history.push(`/video/${asset.id}`)
    }

    return (
        <div onClick={redirectVideoPage} className={className ? className : ''}>
            {asset.title}
            {thumbnailUrl !== '' ? (
                <img src={thumbnailUrl as string} alt={asset.title} />
            ) : (
                <Loader
                    type="Rings"
                    color="#FFA41C"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
        </div>
    )
}

export default ThumbnailVideo
