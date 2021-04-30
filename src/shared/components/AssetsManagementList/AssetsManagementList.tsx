import React, { useEffect, useState } from 'react';
import Amplify, {Storage} from 'aws-amplify';

import awsmobile from '../../../aws-exports';
import {getVodSection} from "../VodStorage/VodStorage";

Amplify.configure(awsmobile)

const AssetsManagementListItem = ({asset, selectedAsset, setSelectedAsset}: any) => {
    const [hover, setHover] = useState<boolean>(false);
    const hoverStyles = {
        backgroundColor: '#969696',
        cursor: 'pointer'
    }
    const selectedStyles = {
        backgroundColor: '#E3E3E3'
    }
    return (
        <div
            style={{
                borderBottom: 'solid 1px black',
                display: 'flex',
                ...(hover ? hoverStyles : null),
                ...(selectedAsset === asset ? selectedStyles : null)
            }}
             onClick={() => {setSelectedAsset(asset)}}
             onMouseEnter={()=>{
                 setHover(true);
             }}
             onMouseLeave={()=>{
                 setHover(false);
             }}
        >
            <div>
                <p>{ asset.title }</p>
                <p>{ asset.description }</p>
            </div>
            <div>
                <p>{ asset.createdAt }</p>
            </div>
            <div>
                <p>{'>'}</p>
            </div>
        </div>
    )
}

const CurrentAsset = ({selectedAsset}: any) => {
    const [thumbnail, setThumbnail] = useState('https://via.placeholder.com/150');
    const [sections, setSections] = useState<Array<string>>([])

    useEffect(() => {
        Storage.get(`thumbnails/${selectedAsset.thumbnail.id}.jpeg`, {
            bucket: awsmobile.aws_user_files_s3_bucket,
            customPrefix: { public: '' }
        })
            .then((data: any) => { setThumbnail(data) })
            .catch((err) => { console.log(err) })
    }, [selectedAsset, setThumbnail])

    useEffect(() => {
        let tmpSections: any[] = []
        Promise.all(selectedAsset.sections.items.map(async (section: any) => {
            const sec: any = await getVodSection(section.sectionID)
            tmpSections = [...tmpSections, sec.data?.getSection.label];
        })).finally(() => {
            setSections(tmpSections)
        })
    }, [selectedAsset, setSections])

    return (
        <div>
            <img src={thumbnail} alt="thumbnail" />
            <p>Title: {selectedAsset.title}</p>
            <p>Description: {selectedAsset.description}</p>
            <p>Tags: { sections.map((s: string) => <span key={s}>{s}</span>) }</p>
            <p>Related to: </p>
        </div>
    )
}

type AssetsManagementListProps = {
    assets: any
}

const AssetsManagementList = ({assets}: AssetsManagementListProps) => {
    const [selectedAsset, setSelectedAsset] = useState(null)

    return (
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', width: '100%'}}>
                <div>
                    <input type="text" placeholder="Amplify video tutorial" style={{width: '100%'}}/>
                    <div>
                        { assets.map((elem: any) => {
                            return (
                                <AssetsManagementListItem
                                    key={elem.id}
                                    asset={elem}
                                    selectedAsset={selectedAsset}
                                    setSelectedAsset={setSelectedAsset}
                                />
                            )
                        }) }
                    </div>
                </div>
                <div>
                    { selectedAsset && <CurrentAsset selectedAsset={selectedAsset} />}
                </div>
            </div>
        </div>
    )
}

export default AssetsManagementList;
