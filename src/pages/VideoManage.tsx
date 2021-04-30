import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';

import awsmobile from '../../aws-exports';
import { vodAsset } from '../../API';
import { listVodFiles } from "../../shared/components/VodStorage";
import AssetsManagementList from "../../shared/components/AssetsManagementList/AssetsManagementList";

Amplify.configure(awsmobile)

const DashboardVideoManage = () => {
    const [vodAssets, setVodAssets] = useState<Array<vodAsset>>([])
    const [nextToken, setNextToken] = useState<string>('')

    useEffect(() => {
        listVodFiles(nextToken).then((data: any) => {
            setNextToken(data.data?.listVodAssets.nextToken)
            setVodAssets(data.data?.listVodAssets.items)
        })
    }, [setVodAssets, setNextToken, listVodFiles])

    return (
        <div style={{width: '100%'}}>
            <AssetsManagementList
                assets={vodAssets}
            />
        </div>
    )
}

export default DashboardVideoManage;
