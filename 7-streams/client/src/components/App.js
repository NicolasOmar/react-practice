import React from 'react'
// ROUTER IS USED TO HOLD ALL ROUTES IN THE APP, EACH ROUTE IS CREATE TO HANDLE A SPECIFIC ROUTE AND ITS RELATED COMPONENT
import { Router, Route } from 'react-router-dom'
// IMPORT COMPONENTS
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
// IMPORT HISTORY TO HANDLE BROWSER PREVIOUS STATE
import history from '../history'


class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="ui container">
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </div>
      </Router>
    ) 
  }
}

export default App