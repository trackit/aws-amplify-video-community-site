import React from 'react';
import Amplify from 'aws-amplify';

import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile)

const DashboardVideoAdd = () => {
    return (
        <div>
            <h1>Video Add</h1>
        </div>
    )
}

export default DashboardVideoAdd;
