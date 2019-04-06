import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'

class EditCourse extends Component {
  render() {
    const formSchema = {
      title: 'Course',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: {
          type: 'string',
          title: 'Name',
          default: ''
        },
        purpose: {
          type: 'string',
          title: 'Purpose',
          default: ''
        },
        description: {
          type: 'string',
          format: 'date',
          title: 'End Date',
          default: ''
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
