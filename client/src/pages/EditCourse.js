import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'

class EditCourse extends Component {
  state = {
    courses: [],
    poses: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/courses/${this.props.match.params.id}`).then((response) => {
      console.log(response)
      this.setState({ courses: response.data })
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
          default: this.state.courses.name
        },
        purpose: {
          type: 'string',
          title: 'Purpose',
          default: this.state.courses.purpose
        },
        description: {
          type: 'string',
          format: 'textarea',
          title: 'Description',
          default: this.state.courses.description
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
      </section>
    )
  }
}

export default EditCourse
