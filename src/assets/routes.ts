import { RouteProps } from 'react-router-dom'
import {
    Dashboard,
    VodApp,
    VideoPage,
    HomePage,
    LiveApp,
    WebinarsApp,
    SearchPage,
} from '../pages'

export const routes: Array<RouteProps> = [
    {
        path: '/admin',
        exact: true,
        component: Dashboard,
    },
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/video/:id',
        exact: true,
        component: VideoPage,
    },
    {
        path: '/videos',
        exact: true,
        component: VodApp,
    },
    {
        path: '/live',
        exact: true,
        component: LiveApp,
    },
    {
        path: '/webinars',
        exact: true,
        component: WebinarsApp,
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage,
    },
]
