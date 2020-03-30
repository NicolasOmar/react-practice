import React from 'react'
import ReactDOM from 'react-dom'
// IMPORT REDUX IMPORTANT PARTS
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// IMPORT COMPONENTS
import App from './components/App'
// IMPORT CUSTOM REDUCERS
import reducers from './reducers'

/*
  TO USE REDUX PROVIDERS AND REDUCERS, FIRST YOU HAVE TO INCLUDE IN THE REACDOM
  RENDER METHOD AND WRAP IT ON THE APP COMPONENT (SO IT IS A LEVEL ABOVE THE APP)
  THE 'STORE' NEEDS TO BE CREATED USING THE CUSTOM REDUCERS YOU HAVE CODED BEFORE
*/
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, 
  document.querySelector('#root')
)