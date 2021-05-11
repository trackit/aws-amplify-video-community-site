import { useState, useEffect } from 'react'
import AssetsManagementList from '../shared/components/AssetsManagementList/AssetsManagementList'
import { fetchVodFiles } from '../shared/utilities'
import Loader from 'react-loader-spinner'

const DashboardVideoManage = () => {
    const [vodAssets, setVodAssets] = useState<any>([])
    const [nextToken, setNextToken] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

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
            } catch (error) {
                console.error('VideoManage.tsx ', error)
            }
            setLoading(false)
        })()
    }, [nextToken])

    return (
        <div style={{ width: '100%' }}>
            {loading ? (
                <Loader
                    type="Bars"
                    color="#FFA41C"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            ) : (
                <AssetsManagementList assets={vodAssets} />
            )}
        </div>
    )
}

export default DashboardVideoManage
