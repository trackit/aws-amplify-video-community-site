import React from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'

Amplify.configure(awsmobile)

const LivestreamAdd = () => {
    return (
        <div>
            <h1>Livestream Add</h1>
        </div>
    )
}

export default LivestreamAdd
