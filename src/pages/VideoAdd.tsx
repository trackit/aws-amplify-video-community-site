import React, { useState } from 'react';
import Amplify from 'aws-amplify';

import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile)

type DropZoneProps = {
    setVodFile: any
}

const DropZone = ({setVodFile}: DropZoneProps) => {

    const handleFile = (e: any) => {
        setVodFile(e.target.files[0] || null)
    }

    return (
        <div id="drop-area">
            <p>Drop a file or</p>
            <input type="file" accept="video/*" onChange={handleFile} />
        </div>
    );
}

type VideoAddFormProps = {
    vodFile: any
}

const VideoAddForm = ({vodFile}: VideoAddFormProps) => {
    return (
        <div>
            Form
        </div>
    );
}

const DashboardVideoAdd = () => {

    const [vodFile, setVodFile] = useState<File|null>(null)

    return (
        <div>
            <h1>Video Add</h1>
            { !vodFile && <DropZone setVodFile={setVodFile} /> }
            { vodFile && <VideoAddForm vodFile={vodFile} /> }
        </div>
    );
}

export default DashboardVideoAdd;
