import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import CourseListItem from '../components/CourseListItem'

class YogaSequences extends Component {
  state = {
    courses: [],
    poses: []
  }

  componentDidMount() {
    this.loadCourses()
  }

  loadCourses = () => {
    axios.get('http://localhost:3000/api/courses').then((response) => {
      console.log(response)
      this.setState({ courses: response.data })
    })
  }

  render() {
    return (
      <section>
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main>
          <ol className="list-group courses-list">
            {this.state.courses.map((course) => {
              return (
                <CourseListItem
                  key={course.id}
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
