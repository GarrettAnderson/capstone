import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

class CourseListItem extends Component {
  state = {
    courses: [],
    poses: []
  }

  deleteCourse = () => {
    axios.delete(`http://localhost:3000/api/courses/${this.props.id}`).then((response) => {
      this.props.history.push('/courses')
    })
  }

  render() {
    return (
      <li className="list-group-item course-list-item">
        <section>
          <h3>{this.props.name}</h3>
          <span className="class-button-wrapper">
            <button className="view-created-class-icon">
              <i className="fas fa-angle-down fa-2x" />
            </button>
            <Link to={`/courses/${this.props.id}`}>
              <button className="edit-created-class-icon">
                <i className="fas fa-pen fa-2x" />
              </button>
            </Link>
            <button className="delete-created-class-icon">
              <i className="fas fa-trash-alt fa-2x" onClick={this.deleteCourse} />
            </button>
          </span>
        </section>
      </li>
    )
  }
}

export default CourseListItem
