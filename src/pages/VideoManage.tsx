import React from 'react';
import Amplify from 'aws-amplify';

import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile)

const DashboardVideoManage = () => {
    return (
        <div>
            <h1>Video Manage</h1>
        </div>
    )
}

export default DashboardVideoManage;
