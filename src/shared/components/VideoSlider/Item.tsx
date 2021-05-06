import cx from 'classnames'
import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import SliderContext from './Context'
import ShowDetailsButton from './ShowDetailsButton'
import { Storage } from 'aws-amplify'
import awsmobile from '../../../aws-exports'
import Mark from './Mark'
import './Item.scss'

async function fetchThumbnail(asset: any) {
    return Storage.get(`thumbnails/${asset.thumbnail.id}.jpeg`, {
        bucket: awsmobile.aws_user_files_s3_bucket,
        customPrefix: {
            public: '',
        },
    })
}

const Item = ({ movie }: any) => {
    const [thumbnailUrl, setThumbnailUrl] = useState<Object | string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            if (movie.thumbnail) {
                setLoading(true)
                const data = await fetchThumbnail(movie)
                setThumbnailUrl(data)
                setLoading(false)
            }
        })()
    }, [movie])

    return (
        <SliderContext.Consumer>
            {({ onSelectSlide, currentSlide, elementRef }: any) => {
                const isActive = currentSlide && currentSlide.id === movie.id

                return loading ? (
                    <Loader
                        type="Rings"
                        color="#FFA41C"
                        height={100}
                        width={100}
                        timeout={3000}
                    />
                ) : (
                    <div
                        ref={elementRef}
                        className={cx('item', {
                            'item--open': isActive,
                        })}
                    >
                        <img src={thumbnailUrl as string} alt="" />
                        <ShowDetailsButton
                            onClick={() => onSelectSlide(movie)}
                        />
                        {isActive && <Mark />}
                    </div>
                )
            }}
        </SliderContext.Consumer>
    )
}

export default Item
