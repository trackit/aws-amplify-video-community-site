import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'
import { fetchSections } from '../../shared/utilities'
import Loader from 'react-loader-spinner'
import SectionsManagementList from '../../shared/components/SectionsManagementList/SectionsManagementList'

Amplify.configure(awsmobile)

const SectionManage = () => {
    const [nextToken, setNextToken] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [sections, setSections] = useState<any>([])

    useEffect(() => {
        ;(async () => {
            setLoading(true)
            try {
                const { data } = await fetchSections(nextToken)
                setNextToken(
                    data.listSections.nextToken
                        ? data.listSections.nextToken
                        : null
                )
                setSections(data.listSections.items)
            } catch (error) {
                console.error('SectionManage.tsx ', error)
            }
            setLoading(false)
        })()
    }, [nextToken])

    return (
        <div>
            {loading ? (
                <Loader
                    type="Bars"
                    color="#FFA41C"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            ) : (
                <SectionsManagementList sections={sections} />
            )}
        </div>
    )
}

export default SectionManage
