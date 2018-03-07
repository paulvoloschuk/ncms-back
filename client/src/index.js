import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import store from './store'
import { history } from './middleware'
import { storageListener, createStoragePusher, unregisterPage } from './sync'
import Application from './containers/Application'
import registerServiceWorker from './registerServiceWorker'

const renderTarget = document.getElementById('application')

// Syncronization of State between tabs
window.addEventListener('storage', storageListener(store))
window.addEventListener('beforeunload', unregisterPage)
store.subscribe(createStoragePusher(store))

ReactDOM.render (
  <Provider store={store}>
    <Router history={history}>
      <Application />
    </Router>
  </Provider>,
  renderTarget
)

registerServiceWorker()
