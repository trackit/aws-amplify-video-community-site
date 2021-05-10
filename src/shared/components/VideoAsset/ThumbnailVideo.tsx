import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Storage } from 'aws-amplify'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import awsmobile from '../../../aws-exports'

const Item = styled.div`
    flex: 0 0 19.7%;
    text-align: center;
    margin: 0 2px;
    transition: transform 300ms ease 100ms;

    &:hover {
        cursor: pointer;
        transform: scale(1.5) !important;
        z-index: 1;
    }

    &:hover ~ div {
        transform: translateX(25%);
    }
`

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

    return (
        <Item
            onClick={() => history.push(`/video/${asset.id}`)}
            className={className ? className : ''}
        >
            {asset.title}
            {thumbnailUrl !== '' ? (
                <img src={thumbnailUrl as string} alt={asset.title} />
            ) : (
                <Loader
                    type="Rings"
                    color="#FFA41C"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            )}
        </Item>
    )
}

export default ThumbnailVideo
