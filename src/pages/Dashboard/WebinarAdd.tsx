import React from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'

Amplify.configure(awsmobile)

const WebinarAdd = () => {
    return (
        <div>
            <h1>Webinar Add</h1>
        </div>
    )
}

export default WebinarAdd
