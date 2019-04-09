import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-jsonschema-form'

class EditYogaPose extends Component {
  state = {
    isFlipped: false
  }

  render() {
    const formSchema = {
      title: 'Create a Course',
      type: 'object',
      required: [ 'name' ],
      properties: {
        user_id: {
          type: 'string',
          title: 'User Id',
          default: 1,
          uiSchema: { 'ui:disabled': true }
        },
        name: {
          type: 'string',
          title: 'Sanskrit Name',
          default: ''
        },
        name: {
          type: 'string',
          title: 'English Name',
          default: ''
        },
        position: {
          type: 'string',
          title: 'Position Type',
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
          <div
            className={`card ${this.state.isFlipped ? 'is-flipped' : ''}`}
            onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
          >
            <div className="card__face card__face--front">
              <img src={require('../images/yoga_stock_img.jpg')} alt="tree-pose-image" />
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

export default EditYogaPose
