import { IoArrowDown } from 'react-icons/io5'
import './SlideButton.scss'

const SlideButton = ({ onClick, type }: any) => (
    <button className={`slide-button slide-button--${type}`} onClick={onClick}>
        <span>
            <IoArrowDown />
        </span>
    </button>
)

export default SlideButton
