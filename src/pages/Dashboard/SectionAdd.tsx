import React from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'

Amplify.configure(awsmobile)

const SectionAdd = () => {
    return (
        <div>
            <h1>Section Add</h1>
        </div>
    )
}

export default SectionAdd
