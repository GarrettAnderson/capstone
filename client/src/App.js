import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import YogaHistory from './pages/YogaHistory'
import YogaPose from './pages/YogaPose'
import YogaPoses from './pages/YogaPoses'
import YogaSequences from './pages/YogaSequences'
import EditCourse from './pages/EditCourse'
import CreateCourse from './pages/CreateCourse'
import YogaSequenceBuilder from './pages/YogaSequenceBuilder'
import YogaPoseImg from './pages/YogaPoseImg'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/poses" component={YogaPoses} />
            <Route exact path="/poses/:id" component={YogaPose} />
            <Route exact path="/courses" component={YogaSequences} />
            <Route exact path="/courses/new" component={CreateCourse} />
            <Route exact path="/courses/:id" component={EditCourse} />

            {/* <Route exact path="/courses/edit/:id" component={EditCourse} /> */}

            {/* <Route exact path="/:YogaSequenceBuilder" component={YogaSequenceBuilder} />
            <Route exact path="/:YogaHistory" component={YogaHistory} />*/}
            {/* <Route exact path="/:YogaPose" component={YogaPose} /> */}
            {/* <Route exact path="/:YogaPose" component={YogaPoseImg} /> */}
            {/* <Route exact path="/:YogaPose/1" component={YogaPose} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
