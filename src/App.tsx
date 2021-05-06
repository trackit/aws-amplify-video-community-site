import Amplify from 'aws-amplify'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { routes } from './assets/routes'
import awsmobile from './aws-exports'

Amplify.configure(awsmobile)

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, key) => (
                    <Route
                        key={key}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Router>
    )
}

export default withAuthenticator(App)
