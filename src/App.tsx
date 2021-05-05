import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './assets/routes'
import './App.css'

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

export default App
