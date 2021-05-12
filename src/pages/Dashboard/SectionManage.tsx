import React from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'

Amplify.configure(awsmobile)

const SectionManage = () => {
    return (
        <div>
            <h1>Section Manage</h1>
        </div>
    )
}

export default SectionManage
