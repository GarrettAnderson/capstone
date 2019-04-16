import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import { DirectUploadProvider } from 'react-activestorage-provider'
import DefaultDirectUploadRender from '../components/DefaultDirectUploadRender'
import yogaStockImg from '../images/yoga_stock_img.jpg'

class AddYogaPose extends Component {
  state = {
    isFlipped: true,
    course: {
      poses: []
    }
  }

  onSubmitEdit = (form) => {
    axios
      .post(`/api/courses/${this.props.match.params.course_id}/poses`, {
        pose: Object.assign(form.formData, { photo: this.state.signedId })
      })
      .then((response) => {
        this.props.history.push(`/courses/${this.props.match.params.course_id}`)
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // If the signed id is what is changing, don't refresh the form
    if (this.state.signedId !== nextState.signedId) {
      return false
    }

    return true
  }

  render() {
    const formSchema = {
      title: 'Create a Pose',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: {
          type: 'string',
          title: 'Sanskrit Name'
        },
        eng_name: {
          type: 'string',
          title: 'English Name'
        },
        category: {
          type: 'string',
          title: 'Position Type'
        },
        physical_benefits: {
          type: 'string',
          title: 'Physical Benefits'
        },
        psych_benefits: {
          type: 'string',
          title: 'Psychological Benefits'
        },
        description: {
          type: 'string',
          format: 'textarea',
          title: 'Description'
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
                src={yogaStockImg === '' ? this.state.image_Url : yogaStockImg}
                alt="tree-pose-image"
                onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
              />
            </div>
            <div className="detail-card-outline card__face card__face--back">
              <Form schema={formSchema} onSubmit={this.onSubmitEdit} className="add-new-pose">
                <DirectUploadProvider
                  onSuccess={(signedIds) => this.setState({ signedId: signedIds[0] })}
                  render={DefaultDirectUploadRender}
                />
                <button className="btn btn-info" type="submit">
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AddYogaPose
