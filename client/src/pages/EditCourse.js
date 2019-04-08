import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'

class EditCourse extends Component {
  state = {
    course: [],
    poses: []
  }

  componentDidMount() {
    this.loadSingleCourse()
    this.loadCoursePoses()
  }

  loadSingleCourse = () => {
    axios.get(`http://localhost:3000/api/courses/${this.props.match.params.id}`).then((response) => {
      console.log(response)
      this.setState({ course: response.data })
    })
  }

  loadCoursePoses = () => {
    axios.get(`http://localhost:3000/api/courses/${this.props.match.params.id}/poses`).then((response) => {
      console.log(response)
      this.setState({ poses: response.data })
    })
  }

  onSubmitEdit = (form) => {
    axios
      .put(`http://localhost:3000/api/courses/${this.props.match.params.id}`, {
        course: form.formData
      })
      .then((response) => {
        this.props.history.push('/courses')
      })
  }

  render() {
    const formSchema = {
      title: 'Course',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: {
          type: 'string',
          title: 'Name',
          default: this.state.course.name
        },
        purpose: {
          type: 'string',
          title: 'Purpose',
          default: this.state.course.purpose
        },
        description: {
          type: 'string',
          format: 'textarea',
          title: 'Description',
          default: this.state.course.description
        }
      }
    }
    return (
      <section>
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <Form schema={formSchema} onSubmit={this.onSubmitEdit} />
        <button className="btn btn-primary">Add Pose</button>
        <section>
          <ol>
            {this.state.poses.map((pose) => {
              return (
                <li key={pose.id}>
                  <img
                    src={require('../images/yoga_stock_img.jpg')}
                    className="pose-gallery-img"
                    alt="specific-yoga-pose-img"
                  />
                  <p>{pose.name}</p>
                </li>
              )
            })}
          </ol>
        </section>
      </section>
    )
  }
}

export default EditCourse
