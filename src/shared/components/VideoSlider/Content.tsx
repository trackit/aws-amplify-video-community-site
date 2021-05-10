import { IoClose } from 'react-icons/io5'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { fetchThumbnail } from '../../utilities'
import { useHistory } from 'react-router-dom'

const StyledContent = styled.div`
    position: relative;
    height: 37vw;
    margin-top: -40px;

    .__background,
    .__background__shadow,
    .__background__image,
    .__area {
        position: absolute;
        top: 0;
        bottom: 0;
    }

    .__background {
        left: 0;
        right: 0;

        &__shadow {
            left: 0;
            background: #000;
            width: 30%;
            z-index: 2;

            &:before {
                content: '';
                position: absolute;
                z-index: 10;
                background-image: linear-gradient(to right, #000, transparent);
                top: 0;
                bottom: 0;
                left: 100%;
                width: 275px;
            }
        }

        &__image {
            right: 0;
            width: 70%;
            height: 100%;
            background-position: center 10%;
            background-size: cover;
            z-index: 1;
        }
    }

    .__area {
        left: 0;
        right: 0;
        height: 100%;
        z-index: 3;

        &__container {
            padding: 30px 70px;
            color: wheat;

            &__title {
                font-size: 45px;
                color: #fff;
                font-weight: 700;
            }

            &__title:hover {
                cursor: pointer;
            }

            &__description {
                font-size: 18px;
                color: #999;
                margin-top: 20px;
                max-width: 500px;
            }
        }

        &__close {
            color: #fff;
            width: 40px;
            height: 40px;
            background: transparent;
            outline: none;
            border: none;
            position: absolute;
            top: 30px;
            right: 30px;
        }

        &__close:hover {
            cursor: pointer;
        }
    }
`

const Content = ({ movie, onClose }: any) => {
    const [thumbnailUrl, setThumbnailUrl] = useState<Object | string>('')
    // const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect(() => {
        ;(async () => {
            if (movie.thumbnail) {
                // setLoading(true)
                const data = await fetchThumbnail(movie)
                setThumbnailUrl(data)
                // setLoading(false)
            }
        })()
    }, [movie])

    return (
        <StyledContent>
            <div className="__background">
                <div className="__background__shadow" />
                <div
                    className="__background__image"
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                />
            </div>
            <div className="__area">
                <div className="__area__container">
                    <div
                        className="__area__container__title"
                        onClick={() => history.push(`/video/${movie.id}`)}
                    >
                        {movie.title}
                    </div>
                    <div className="__area__container__description">
                        {movie.description}
                    </div>
                </div>
                <button className="__area__close" onClick={onClose}>
                    <IoClose />
                </button>
            </div>
        </StyledContent>
    )
}

export default Content
