import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addform from './components/Addform'
import Home from './components/Home'
import FindPictureDay from './components/FindPictureDay'
import UpdatePicture from './components/UpdatePicture'
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Addform" component={Addform} />
            <Route exact path="/FindPicture" component={FindPictureDay} />
            <Route
              exact
              path="/UpdatePicture/:id/:title/:description"
              component={UpdatePicture}
            />
          </Switch>
        </Router>
        {/* <Addform /> */}
      </>
    )
  }
}

export default App
