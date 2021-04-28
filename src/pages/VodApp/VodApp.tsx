import React, {useEffect, useState} from "react";
import { withAuthenticator } from 'aws-amplify-react';
import {listVodFiles} from "../../shared/components/VodStorage";
import './VodApp.css'
import {HighlightedVideo, NavBar, ThumbnailVideo} from "../../shared/components";

const VodApp = () => {
    const [vodAssets, setVodAssets] = useState([])
    const [nextToken, setNextToken] = useState('')

    useEffect(() => {
        listVodFiles(nextToken)
            .then((data: any) => {
                console.log(data.data.listVodAssets)
                setNextToken(data.data.nextToken)
                setVodAssets(data.data.listVodAssets.items)
            })
            .catch((err: any) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <NavBar/>
            <p>Welcome to the <b>TrackIt VodApp</b>.</p>
            <div className='container'>
            {
                vodAssets.map((asset, key) => {
                    return <ThumbnailVideo className='item' asset={asset} key={key}/>
                })
            }
            </div>
            {
                vodAssets.length > 0 && <HighlightedVideo asset={vodAssets[0]}/>
            }
        </div>
    )
}

export default withAuthenticator(VodApp, true);
