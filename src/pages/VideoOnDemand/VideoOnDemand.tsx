import Loader from 'react-loader-spinner'
import { useEffect, useState } from 'react'
import { fetchVodFiles, VodAsset } from '../../shared/utilities/'
import { Slider, Item } from '../../shared/components/VideoSlider'
import { NavBar } from '../../shared/components'

function renderThumbnails(vodAssets: Array<VodAsset>) {
    if (vodAssets.length > 0)
        return vodAssets.map((movie: any) => (
            <Item movie={movie} key={movie.id} />
        ))
    return <p>No VoD Files</p>
}

const VodApp = () => {
    const [vodAssets, setVodAssets] = useState<any>([])
    const [nextToken, setNextToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            setLoading(true)
            try {
                const { data } = await fetchVodFiles(nextToken)
                setNextToken(
                    data.listVodAssets.nextToken
                        ? data.listVodAssets.nextToken
                        : null
                )
                setVodAssets(data.listVodAssets.items)
                console.log('Data: ', data)
            } catch (error) {
                console.error('VodApp.tsx ', error)
            }
            setLoading(false)
        })()
    }, [nextToken])

    return (
        <div>
            <NavBar />
            {/* TODO: Render each categories vertically */}
            {loading ? (
                <Loader
                    type="Bars"
                    color="#FFA41C"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            ) : (
                <Slider>{renderThumbnails(vodAssets)}</Slider>
            )}
        </div>
    )
}

export default VodApp
