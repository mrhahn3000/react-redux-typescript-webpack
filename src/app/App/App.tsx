import * as React from 'react'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router-dom'

import {ConnectedRouter, routerMiddleware} from 'react-router-redux'

import rootReducer from '../reducers'

import Header from '../Header/Header'
import Page from '../Page/Page'
import Footer from '../Footer/Footer'

// Create a browser history
const history = createHistory();

// Build middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add reducer to the store on the 'router' key and apply middleware for navigating
// With that we are able to dispatch navigation actions from anywhere
const store = createStore(rootReducer, applyMiddleware(middleware));

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className='container'>
                <Route exact path="/" component={Header}/>
                <Route path="/page" component={Page}/>
                <Route path="/footer" component={Footer}/>
            </div>
        </ConnectedRouter>
    </Provider>
);

export default App
