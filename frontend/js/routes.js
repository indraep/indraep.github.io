import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import Route from 'react-router/lib/Router'

import App from './components/App';

// import Profile1 from './components/profile/Profile1';
// import Profile2 from './components/profile/Profile2';

// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
    throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
    return module => cb(null, module.default);
}

/**
 * Router takes in the browserHitsory and all the routes we 
 * created in './routes/'. This is the highest level component
 * of our application. 
 * learn more: https://github.com/ReactTraining/react-router/blob/master/docs/API.md#router
 */
class Root extends React.Component {

    render() {

        const Homepage = function(location, cb) {
            System.import('./components/Homepage')
                .then(loadRoute(cb))
                .catch(errorLoading);
        };

        const Profile = function(location, cb) {
            System.import('./components/Profile')
                .then(loadRoute(cb))
                .catch(errorLoading);
        };

        const Profile1 = function(location, cb) {
            System.import('./components/profile/Profile1')
                .then(loadRoute(cb))
                .catch(errorLoading);
        };

        const Profile2 = function(location, cb) {
            System.import('./components/profile/Profile2')
                .then(loadRoute(cb))
                .catch(errorLoading);
        };

        const NotFound = function(location, cb) {
            System.import('./components/NotFound')
                .then(loadRoute(cb))
                .catch(errorLoading);
        };

        return (
            <Router history={browserHistory}>
                <Route component={App}>
                    <Route path="/" getComponent={Homepage} />
                    <Route path="/profile" getComponent={Profile}>
                        <Route path="1" getComponent={Profile1} />
                        <Route path="2" getComponent={Profile2} />
                    </Route>
                    <Route path="*" getComponent={NotFound} />
                </Route>
            </Router>
        );
    }

}

export default Root;
