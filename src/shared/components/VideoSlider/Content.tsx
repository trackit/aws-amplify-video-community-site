import { IoClose } from 'react-icons/io5'
import './Content.scss'

const Content = ({ movie, onClose }: any) => (
    <div className="content">
        <div className="content__background">
            <div className="content__background__shadow" />
            <div
                className="content__background__image"
                style={{ backgroundImage: `url(${movie.imageBg})` }}
            />
        </div>
        <div className="content__area">
            <div className="content__area__container">
                <div className="content__title">{movie.title}</div>
                <div className="content__description">{movie.description}</div>
            </div>
            <button className="content__close" onClick={onClose}>
                <IoClose />
            </button>
        </div>
    </div>
)

export default Content
