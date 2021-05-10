import React, { useEffect, useState } from 'react'
import Amplify, { Storage } from 'aws-amplify'

import awsmobile from '../../../aws-exports'
import { fetchSections } from '../../utilities'
import { section } from '../../../API'

Amplify.configure(awsmobile)

const AssetsManagementListItem = ({
    asset,
    selectedAsset,
    setSelectedAsset,
}: any) => {
    const [hover, setHover] = useState<boolean>(false)
    const hoverStyles = {
        backgroundColor: '#969696',
        cursor: 'pointer',
    }
    const selectedStyles = {
        backgroundColor: '#E3E3E3',
    }
    return (
        <div
            style={{
                borderBottom: 'solid 1px black',
                display: 'flex',
                ...(hover ? hoverStyles : null),
                ...(selectedAsset === asset ? selectedStyles : null),
            }}
            onClick={() => {
                setSelectedAsset(asset)
            }}
            onMouseEnter={() => {
                setHover(true)
            }}
            onMouseLeave={() => {
                setHover(false)
            }}
        >
            <div>
                <p>{asset.title}</p>
                <p>{asset.description}</p>
            </div>
            <div>
                <p>{asset.createdAt}</p>
            </div>
            <div>
                <p>{'>'}</p>
            </div>
        </div>
    )
}

const CurrentAsset = ({ selectedAsset }: any) => {
    const [thumbnail, setThumbnail] = useState(
        'https://via.placeholder.com/150'
    )
    const [sections, setSections] = useState<Array<section>>([])
    const [nextToken, setNextToken] = useState<string>('')

    useEffect(() => {
        Storage.get(`thumbnails/${selectedAsset.thumbnail.id}.jpeg`, {
            bucket: awsmobile.aws_user_files_s3_bucket,
            customPrefix: { public: '' },
        })
            .then((data: any) => {
                setThumbnail(data)
            })
            .catch((err) => {
                console.error('AssetsManagementList: ', err)
            })
    }, [selectedAsset, setThumbnail])

    // TODO: change graphql to optimise this:
    useEffect(() => {
        ;(async () => {
            const { data }: any = await fetchSections(nextToken)
            console.log('data:', data)
            setNextToken(
                data.listSections.nextToken ? data.listSections.nextToken : null
            )
            setSections(data.listSections.items)
        })()
    }, [nextToken, selectedAsset, setSections])

    return (
        <div>
            <img src={thumbnail} alt="thumbnail" />
            <p>Title: {selectedAsset.title}</p>
            <p>Description: {selectedAsset.description}</p>
            <p>
                Tags:{' '}
                {sections
                    .filter(
                        (s) => !selectedAsset.sections.items.includes(s.label)
                    )
                    .map((s) => (
                        <span key={s.label}>{s.label}</span>
                    ))}
            </p>
            <p>Related to: </p>
        </div>
    )
}

type AssetsManagementListProps = {
    assets: any
}

const AssetsManagementList = ({ assets }: AssetsManagementListProps) => {
    const [selectedAsset, setSelectedAsset] = useState(null)
    const [searchValue, setSearchValue] = useState('')

    const filterAssets = (elem: any) => {
        return (
            elem.title.includes(searchValue) ||
            elem.description.includes(searchValue)
        )
    }

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ padding: '15px' }}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <div style={{ width: '100%' }}>
                            <input
                                type="text"
                                placeholder="Amplify video tutorial"
                                value={searchValue}
                                onChange={(e: any) =>
                                    setSearchValue(e.target.value)
                                }
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    setSearchValue('')
                                }}
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <div>
                        {assets.filter(filterAssets).map((elem: any) => {
                            return (
                                <AssetsManagementListItem
                                    key={elem.id}
                                    asset={elem}
                                    selectedAsset={selectedAsset}
                                    setSelectedAsset={setSelectedAsset}
                                />
                            )
                        })}
                    </div>
                </div>
                <div style={{ padding: '15px' }}>
                    {selectedAsset && (
                        <CurrentAsset selectedAsset={selectedAsset} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AssetsManagementList
