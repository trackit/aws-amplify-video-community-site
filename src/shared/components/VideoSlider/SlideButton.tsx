import { IoArrowDown } from 'react-icons/io5'
import styled from 'styled-components'

const StyledButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 55px;
    background: rgba(0, 0, 0, 0.5);
    border: 0;
    outline: 0;
    padding: 0;
    margin: 40px 0;
    z-index: 4;

    span {
        width: 25px;
        color: #fff;
        display: block;
        margin: 0 auto;
    }

    .--next {
        right: 0;

        span {
            transform: rotateZ(-90deg);
        }
    }

    .--prev {
        left: 0;

        span {
            transform: rotateZ(90deg);
        }
    }
`

const SlideButton = ({ onClick, type }: any) => (
    <StyledButton className={`--${type}`} onClick={onClick}>
        <span>
            <IoArrowDown />
        </span>
    </StyledButton>
)

export default SlideButton
