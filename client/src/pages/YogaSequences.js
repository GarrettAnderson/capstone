import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import CourseListItem from '../components/CourseListItem'
import auth from '../auth'

class YogaSequences extends Component {
  state = {
    courses: [],
    poses: []
  }

  componentDidMount() {
    this.loadCourses()
  }

  loadCourses = () => {
    axios.get('/api/courses').then((response) => {
      console.log(response)
      this.setState({ courses: response.data })
    })
  }

  render() {
    return (
      <section className={this.state.courses.length >= 0 ? 'courses-container' : ''}>
        <header className="header-nav">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>
        <main>
          {auth.isAuthenticated() && (
            <Link to="/courses/new">
              <button type="button" className="create-class-btn btn btn-primary btn-block">
                Add New Class
              </button>
            </Link>
          )}
          <ol className="list-group courses-list">
            {this.state.courses.map((course) => {
              return (
                <CourseListItem
                  key={course.id}
                  poses={course.poses}
                  id={course.id}
                  name={course.name}
                  load={this.loadCourses}
                  purpose={course.purpose}
                  desc={course.description}
                />
              )
            })}
          </ol>
        </main>
      </section>
    )
  }
}

export default YogaSequences
