import React from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'

Amplify.configure(awsmobile)

const LivestreamManage = () => {
    return (
        <div>
            <h1>Livestream Manage</h1>
        </div>
    )
}

export default LivestreamManage
