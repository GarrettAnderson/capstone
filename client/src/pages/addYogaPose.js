import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'

class AddYogaPose extends Component {
  state = {
    isFlipped: false,
    course: {
      poses: []
    }
  }

  onSubmitEdit = (form) => {
    axios
      .post(`http://localhost:3000/api/courses/${this.props.match.params.course_id}/poses`, {
        pose: form.formData
      })
      .then((response) => {
        this.props.history.push(`/courses/${this.props.match.params.course_id}`)
      })
  }

  render() {
    const formSchema = {
      title: 'Create a Pose',
      type: 'object',
      required: [ 'name' ],
      properties: {
        course_id: {
          type: 'string',
          title: 'Course Id',
          default: `${this.props.match.params.course_id}`
        },
        name: {
          type: 'string',
          title: 'Sanskrit Name',
          default: ''
        },
        alt_name: {
          type: 'string',
          title: 'English Name',
          default: ''
        },
        position: {
          type: 'string',
          title: 'Position Type',
          default: ''
        },
        physical_benefits: {
          type: 'string',
          title: 'Physical Benefits',
          default: ''
        },
        psych_benefits: {
          type: 'string',
          title: 'Psychological Benefits',
          default: ''
        },
        description: {
          type: 'string',
          format: 'textarea',
          title: 'Description',
          default: ''
        }
      }
    }
    return (
      <section className="single-pose-container">
        <header className="header-nav">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>

        <div className="scene scene--card">
          <div className={`card ${this.state.isFlipped ? 'is-flipped' : ''}`}>
            <div className="card__face card__face--front">
              <img
                src={require('../images/yoga_stock_img.jpg')}
                alt="tree-pose-image"
                onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
              />
            </div>
            <div className="detail-card-outline card__face card__face--back">
              <Form schema={formSchema} onSubmit={this.onSubmitEdit} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AddYogaPose
