// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App.js';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import  App  from './components/App.js'
import { configureStore } from './state'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()