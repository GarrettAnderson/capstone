import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-jsonschema-form'

class CreateCourse extends Component {
  // state = {
  //   course: [],
  //   poses: []
  // }

  createCourse = (form) => {
    axios
      .post('/api/courses', {
        course: form.formData
      })
      .then((response) => {
        this.props.history.push('/courses')
      })
    // .then((response) => {
    //   console.log(response)
    //   this.setState({ course: response.data })
    // })
  }

  render() {
    const formSchema = {
      title: 'Create a Course',
      type: 'object',
      required: [ 'name' ],
      properties: {
        // user_id: {
        //   type: 'string',
        //   title: 'User Id',
        //   default: 1
        // },
        name: {
          type: 'string',
          title: 'Name',
          default: 'Name'
        },
        purpose: {
          type: 'string',
          title: 'Purpose',
          default: 'Purpose'
        },
        description: {
          type: 'string',
          format: 'textarea',
          title: 'Description',
          default: 'Desc'
        }
      }
    }
    return (
      <section>
        <header className="header-nav">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>
        <Form schema={formSchema} onSubmit={this.createCourse} className="create-class-form" />
      </section>
    )
  }
}

export default CreateCourse
