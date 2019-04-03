import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import YogaHistory from './pages/YogaHistory'
import YogaPose from './pages/YogaPose'
import YogaPoses from './pages/YogaPoses'
import YogaSequences from './pages/YogaSequences'
import YogaSequenceBuilder from './pages/YogaSequenceBuilder'
import YogaPoseImg from './pages/YogaPoseImg'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/:YogaSequenceBuilder" component={YogaSequenceBuilder} />
            <Route exact path="/:YogaHistory" component={YogaHistory} />
            <Route exact path="/:YogaPoses" component={YogaPoses} /> */}
            <Route exact path="/:YogaPose" component={YogaPose} />
            {/* <Route exact path="/:YogaPose/1" component={YogaPoseImg} /> */}
            {/* <Route exact path="/:YogaPose" component={YogaPoseImg} /> */}
            {/* <Route exact path="/:YogaPose/1" component={YogaPose} /> */}

            {/* <Route exact path="/:YogaSequences" component={YogaSequences} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
