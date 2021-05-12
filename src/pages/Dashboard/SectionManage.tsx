import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'
import { fetchSections } from '../../shared/utilities'

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
            <h1>Section Manage</h1>
        </div>
    )
}

export default SectionManage
