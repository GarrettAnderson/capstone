import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import yogaStockImg from '../images/yoga_stock_img.jpg'

class EditCourse extends Component {
  state = {
    course: {},
    poses: []
  }

  componentDidMount() {
    this.loadSingleCourse()
  }

  loadSingleCourse = () => {
    axios.get(`/api/courses/${this.props.match.params.id}`).then((response) => {
      console.log(response)
      this.setState({ course: response.data })
      this.setState({ poses: response.data.poses })
    })
  }

  loadCoursePoses = () => {
    axios.get(`/api/courses/${this.props.match.params.id}`).then((response) => {
      console.log(response.data)
      this.setState({ poses: response.data.poses })
    })
  }

  onSubmitEdit = (form) => {
    axios
      .put(`/api/courses/${this.props.match.params.id}`, {
        course: form.formData
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error)
        } else {
          this.props.history.push('/courses')
        }
      })
  }

  // addPose = () => {
  //   axios.post(`/api/courses/${this.state.course.id}/poses`).then((response) => {
  //     this.props.history.push('/courses')
  //   })
  // }

  deletePose = (pose) => {
    axios.delete(`/api/courses/${this.props.match.params.id}/poses/${pose.id}`).then((response) => {
      this.loadCoursePoses()
    })
  }

  render() {
    const formSchema = {
      title: 'Edit Course Details',
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
      <section className={this.state.poses.length === 0 ? 'edit-course-container' : ''}>
        <header className="header-nav">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>
        <section className="edit-yoga-course">
          <Form schema={formSchema} onSubmit={this.onSubmitEdit} className="edit-course-form" />
          <ol>
            {this.state.poses.map((pose) => {
              return (
                <li key={pose.id}>
                  <Link to={`/courses/${this.props.match.params.id}/poses/edit/${pose.id}`}>
                    <img
                      src={pose.photo_url || yogaStockImg}
                      className="edit-pose-gallery-img"
                      alt="specific-yoga-pose-img"
                    />
                  </Link>
                  <p>{pose.name}</p>
                  <button className="btn btn-danger delete-btn" onClick={() => this.deletePose(pose)}>
                    Delete Pose
                  </button>
                  {/* <button className="btn btn-primary" onClick={this.addPose}>
                    Edit Pose
                  </button> */}
                </li>
              )
            })}
          </ol>
          <Link to={`/courses/${this.props.match.params.id}/poses/add`}>
            <button className="btn btn-primary add-btn">Add a Pose</button>
          </Link>
        </section>
      </section>
    )
  }
}

export default EditCourse
