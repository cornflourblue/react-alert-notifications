import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from '../_helpers';
import { Alert } from '../_components';
import { Home } from '../home';
import { MultiAlerts } from '../multi-alerts';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                {/* nav */}
                <div className="container text-center">
                    <Link to="/" className="btn btn-link">Single Alert</Link>
                    <Link to="/multi-alerts" className="btn btn-link">Multiple Alerts</Link>
                </div>

                {/* main app container */}
                <div className="jumbotron p-4">
                    <div className="container text-center">
                        <Alert />
                        <Route exact path="/" component={Home} />
                        <Route path="/multi-alerts" component={MultiAlerts} />
                    </div>
                </div>
            </Router>
        );
    }
}

export { App };