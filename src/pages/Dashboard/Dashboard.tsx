import React, { useEffect, useState } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import Amplify, { Auth } from 'aws-amplify'

import awsmobile from '../../aws-exports'
import { NavBar } from '../../shared/components'
import VideoAdd from './VideoAdd'
import VideoManage from './VideoManage'
import LivestreamAdd from './LivestreamAdd'
import LivestreamManage from './LivestreamManage'
import WebinarAdd from './WebinarAdd'
import WebinarManage from './WebinarManage'
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsmobile)

type LeftPanelProps = {
    currentPage: string
    setCurrentPage: any
}

const LeftPanel = ({ currentPage, setCurrentPage }: LeftPanelProps) => {
    const match = useRouteMatch()
    return (
        <div>
            <h2>Video</h2>
            <div>
                <Link
                    to={`${match.url}/video/add`}
                    onClick={() => setCurrentPage('video/add')}
                >
                    Add new video
                </Link>
            </div>
            <div>
                <Link
                    to={`${match.url}/video/manage`}
                    onClick={() => setCurrentPage('video/manage')}
                >
                    Manage videos
                </Link>
            </div>
            <h2>Livestream</h2>
            <div>
                <Link
                    to={`${match.url}/livestream/add`}
                    onClick={() => setCurrentPage('livestream/add')}
                >
                    Add new livestream
                </Link>
            </div>
            <div>
                <Link
                    to={`${match.url}/livestream/manage`}
                    onClick={() => setCurrentPage('livestream/manage')}
                >
                    Manage livestreams
                </Link>
            </div>
            <h2>Webinars</h2>
            <div>
                <Link
                    to={`${match.url}/webinar/add`}
                    onClick={() => setCurrentPage('webinar/add')}
                >
                    Add new webinar
                </Link>
            </div>
            <div>
                <Link
                    to={`${match.url}/webinar/manage`}
                    onClick={() => setCurrentPage('webinar/manage')}
                >
                    Manage webinars
                </Link>
            </div>
        </div>
    )
}

const RightPanel = () => {
    let match = useRouteMatch()
    return (
        <div style={{ width: '100%', padding: '15px' }}>
            <Switch>
                <Route path={`${match.path}/video/add`}>
                    <VideoAdd />
                </Route>
                <Route path={`${match.path}/video/manage`}>
                    <VideoManage />
                </Route>
                <Route path={`${match.path}/livestream/add`}>
                    <LivestreamAdd />
                </Route>
                <Route path={`${match.path}/livestream/manage`}>
                    <LivestreamManage />
                </Route>
                <Route path={`${match.path}/webinar/add`}>
                    <WebinarAdd />
                </Route>
                <Route path={`${match.path}/webinar/manage`}>
                    <WebinarManage />
                </Route>
            </Switch>
        </div>
    )
}

const Dashboard = () => {
    const [groups, setGroups] = useState([] as Array<string>)
    const [currentPage, setCurrentPage] = useState<string>('')

    useEffect(() => {
        Auth.currentSession().then((data) => {
            const groupsData = data.getIdToken().payload['cognito:groups']
            console.log(data, groupsData)
            if (groupsData !== undefined) setGroups(groupsData)
        })
    }, [])

    const Admin = () => {
        return (
            <div>
                <NavBar />
                <div style={{ display: 'flex' }}>
                    <LeftPanel
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    <RightPanel />
                </div>
            </div>
        )
    }

    const choosePanel = () => {
        if (groups.includes('Admin')) {
            return Admin()
        } else {
            return (
                <div>
                    <NavBar />
                    <p>Not Authenticated</p>
                </div>
            )
        }
    }
    return choosePanel()
}

export default withAuthenticator(Dashboard)
