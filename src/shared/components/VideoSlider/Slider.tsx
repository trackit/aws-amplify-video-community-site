import React, { useState } from 'react'
import SliderContext from './Context'
import Content from './Content'
import SlideButton from './SlideButton'
import SliderWrapper from './SliderWrapper'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import styled from 'styled-components'
import { StyledItem } from './Item'
import { StyledShowDetailsButton } from './ShowDetailsButton'

const StyledSlider = styled.div`
    display: flex;
    position: relative;

    .__container {
        display: flex;
        padding: 0 55px;
        transition: transform 300ms ease 100ms;
        z-index: 3;
        width: 100%;
    }

    &:not(&.--open) ${StyledItem}:hover ${StyledShowDetailsButton} {
        opacity: 1;
    }

    &:not(&.--open) ${StyledItem}:hover {
        transform: scale(1.5) !important;
    }

    &:not(&.--open):hover ${StyledItem} {
        transform: translateX(-25%);
    }

    &:not(&.--open) ${StyledItem}:hover ~ ${StyledItem} {
        transform: translateX(25%);
    }
`

const Slider = ({ children, activeSlide }: any) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlide)
    const { width, elementRef } = useSizeElement()
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef,
        hasNext,
        hasPrev,
    } = useSliding(width, React.Children.count(children))

    const handleSelect = (movie: any) => {
        setCurrentSlide(movie)
    }

    const handleClose = () => {
        setCurrentSlide(null)
    }

    const contextValue: any = {
        onSelectSlide: handleSelect,
        onCloseSlide: handleClose,
        elementRef,
        currentSlide,
    }

    return (
        <SliderContext.Provider value={contextValue}>
            <SliderWrapper>
                <StyledSlider className={currentSlide != null ? '--open' : ''}>
                    <div
                        ref={containerRef}
                        className="__container"
                        {...slideProps}
                    >
                        {children}
                    </div>
                </StyledSlider>
                {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
                {hasNext && <SlideButton onClick={handleNext} type="next" />}
            </SliderWrapper>
            {currentSlide && (
                <Content movie={currentSlide} onClose={handleClose} />
            )}
        </SliderContext.Provider>
    )
}

export default Slider
