import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import auth from '../auth'
import yogaStockImage from '../images/yoga_stock_img.jpg'

class CourseListItem extends Component {
  state = {
    courses: [],
    poses: [],
    isShown: true
  }

  deleteCourse = () => {
    axios.delete(`/api/courses/${this.props.id}`).then((response) => {
      this.props.load()
    })
  }

  render() {
    return (
      <li className="list-group-item course-list-item">
        <section>
          <h3>{this.props.name}</h3>
          <span className="class-button-wrapper">
            <button className="view-created-class-icon" onClick={() => this.setState({ isShown: !this.state.isShown })}>
              {this.state.isShown ? <i className="fas fa-angle-down fa-2x" /> : <i className="fas fa-angle-up fa-2x" />}
            </button>
            {auth.isAuthenticated() &&
            this.props.owned && (
              <Link to={`/courses/${this.props.id}`}>
                <button className="edit-created-class-icon">
                  <i className="fas fa-pen fa-2x" />
                </button>
              </Link>
            )}
            {auth.isAuthenticated() &&
            this.props.owned && (
              <button className="delete-created-class-icon">
                <i className="fas fa-trash-alt fa-2x" onClick={this.deleteCourse} />
              </button>
            )}
          </span>
        </section>
        {/* Below is the div for showing poses per class */}
        <div className={`course-poses ${this.state.isShown ? 'is-shown' : ''}`}>
          {this.props.poses.map((pose) => {
            return (
              <figure key={pose.id}>
                <img src={pose.photo_url || yogaStockImage} className="pose-gallery-img" alt="specific-yoga-pose-img" />
                <figcaption>{pose.name}</figcaption>
              </figure>
            )
          })}
        </div>
      </li>
    )
  }
}

export default CourseListItem
