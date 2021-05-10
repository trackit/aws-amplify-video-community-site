import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import SliderContext from './Context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import { fetchThumbnail } from '../../utilities'
import styled from 'styled-components'

export const StyledItem = styled.div`
    flex: 0 0 19.7%;
    transition: transform 300ms ease 100ms;
    margin: 0 2px;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        vertical-align: top;
    }

    &:hover {
        cursor: pointer;
    }
`

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
                    <StyledItem
                        ref={elementRef}
                        className={isActive && 'item--open'}
                        onClick={() => onSelectSlide(movie)}
                    >
                        <img src={thumbnailUrl as string} alt="thumbnail" />
                        <ShowDetailsButton />
                        {isActive && <Mark />}
                    </StyledItem>
                )
            }}
        </SliderContext.Consumer>
    )
}

export default Item
