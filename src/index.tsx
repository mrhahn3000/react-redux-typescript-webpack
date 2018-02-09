import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './app/App/App'
import './styles/main.scss'

declare var module: { hot: any };

const render = App => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('root'),
    )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app/App/App', () => {
        const nxtApp = require ('./app/App/App').default;
            render(nxtApp)
    });
}