import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
import { Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import YogaHistory from './pages/YogaHistory'
import YogaPose from './pages/YogaPose'
import YogaPoses from './pages/YogaPoses'
import YogaSequences from './pages/YogaSequences'
import EditCourse from './pages/EditCourse'
import EditYogaPose from './pages/EditYogaPose'
import AddYogaPose from './pages/AddYogaPose'
import CreateCourse from './pages/CreateCourse'
import YogaSequenceBuilder from './pages/YogaSequenceBuilder'
import YogaPoseImg from './pages/YogaPoseImg'
import auth from './auth'
import history from './history'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/login" render={() => auth.login()} />

            <Route
              path="/logout"
              render={() => {
                auth.logout()

                window.location = '/'

                return <div />
              }}
            />
            <Route
              path="/callback"
              render={() => {
                auth.handleAuthentication(() => {
                  // NOTE: Uncomment the following lines if you are using axios
                  //
                  // Set the axios authentication headers
                  axios.defaults.headers.common = {
                    Authorization: auth.authorizationHeader()
                  }

                  window.location = '/'
                })

                return <div />
              }}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/poses" component={YogaPoses} />
            <Route exact path="/courses" component={YogaSequences} />
            <Route exact path="/courses/new" component={CreateCourse} />
            <Route exact path="/courses/:id" component={EditCourse} />
            <Route exact path="/courses/:course_id/poses/add" component={AddYogaPose} />
            <Route exact path="/courses/:course_id/poses/:id" component={YogaPose} />
            <Route exact path="/courses/:course_id/poses/edit/:id" component={EditYogaPose} />
            <Route path="/login" render={() => auth.login()} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
