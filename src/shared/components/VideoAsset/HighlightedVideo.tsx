import { ThumbnailVideo } from '../index'

const HighlightedVideo = ({ asset }: any) => {
    return (
        <div>
            <h2>Highlighted content</h2>
            <ThumbnailVideo asset={asset} />
            <p>{asset.description}</p>
        </div>
    )
}

export default HighlightedVideo
