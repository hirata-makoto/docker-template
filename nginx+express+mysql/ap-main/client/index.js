import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import {configureStore, preloadedState} from './store/configureStore'

const store = configureStore(preloadedState)

render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
)
