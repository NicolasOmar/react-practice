import React from 'react'
import ReactDOM from 'react-dom'
// IMPORT REDUX IMPORTANT PARTS
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// IMPORT COMPONENTS
import App from './components/App'
// IMPORT CUSTOM REDUCERS
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, 
  document.querySelector('#root')
)