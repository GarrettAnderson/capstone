import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-jsonschema-form'
import { DirectUploadProvider } from 'react-activestorage-provider'
import DefaultDirectUploadRender from '../components/DefaultDirectUploadRender'
import yogaStockImage from '../images/yoga_stock_img.jpg'

class EditYogaPose extends Component {
  state = {
    isFlipped: true,
    course: {},
    pose: {},
    signedId: ''
  }

  componentDidMount() {
    axios
      .get(`/api/courses/${this.props.match.params.course_id}/poses/${this.props.match.params.id}}`)
      .then((response) => {
        console.log(response.data)
        this.setState({ pose: response.data })
      })
  }

  onSubmitEdit = (form) => {
    let poseData = form.formData

    // Attach the photo if there is one
    if (this.state.signedId) {
      poseData.photo = this.state.signedId
    }

    axios
      .put(`/api/courses/${this.props.match.params.course_id}/poses/${this.props.match.params.id}`, {
        pose: poseData
      })
      .then((response) => {
        this.props.history.push(`/courses/${this.props.match.params.course_id}`)
      })
  }

  render() {
    const formSchema = {
      title: 'Edit Pose',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: {
          type: 'string',
          title: 'Sanskrit Name',
          default: this.state.pose.name
        },
        eng_name: {
          type: 'string',
          title: 'English Name',
          default: this.state.pose.eng_name
        },
        category: {
          type: 'string',
          title: 'Position Type',
          default: this.state.pose.category
        },
        physical_benefits: {
          type: 'string',
          title: 'Physical Benefits',
          default: this.state.pose.physical_benefits
        },
        psych_benefits: {
          type: 'string',
          title: 'Psychological Benefits',
          default: this.state.pose.psych_benefits
        },
        description: {
          type: 'string',
          format: 'textarea',
          title: 'Description',
          default: this.state.pose.description
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
                src={this.state.pose.photo_url || yogaStockImage}
                alt="tree-pose"
                onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
              />
            </div>
            <div className="detail-card-outline card__face card__face--back">
              <Form schema={formSchema} onSubmit={this.onSubmitEdit} className="edit-pose-form">
                <DirectUploadProvider
                  className="upload-image"
                  onSuccess={(signedIds) => this.setState({ signedId: signedIds[0] })}
                  render={DefaultDirectUploadRender}
                />
                <button className="btn btn-info edit-pose-submit" type="submit">
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

export default EditYogaPose
