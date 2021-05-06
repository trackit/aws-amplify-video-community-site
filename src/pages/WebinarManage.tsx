import React from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'

Amplify.configure(awsmobile)

const WebinarManage = () => {
    return (
        <div>
            <h1>Webinar Manage</h1>
        </div>
    )
}

export default WebinarManage
