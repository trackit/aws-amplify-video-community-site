import { RouteProps } from 'react-router-dom';
import {Dashboard, VodApp, VideoPage} from '../pages';


export const routes: Array<RouteProps> = [
    {
        path: '/admin',
        exact: true,
        component: Dashboard
    },
    {
        path: '/',
        exact: true,
        component: VodApp
    },
    {
        path: '/video/:id',
        exact: true,
        component: VideoPage,
    }
]
