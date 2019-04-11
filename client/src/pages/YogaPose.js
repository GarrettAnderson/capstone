import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class YogaPose extends Component {
  state = {
    isFlipped: false,
    pose: {}
  }

  componentDidMount() {
    axios
      .get(`/api/courses/${this.props.match.params.course_id}/poses/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response)
        this.setState({ pose: response.data })
      })
  }

  render() {
    return (
      <section className="single-pose-container">
        <header className="header-nav">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>

        <div className="scene scene--card yoga-pose-container">
          <div
            className={`card ${this.state.isFlipped ? 'is-flipped' : ''}`}
            onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
          >
            <div className="card__face card__face--front">
              <img src={require('../images/yoga_stock_img.jpg')} alt="tree-pose-image" />
            </div>
            <div className="detail-card-outline card__face card__face--back">
              <ol className="pose-details-list list-group">
                <li className="list-group-item">{this.state.pose.name}</li>
                <li className="list-group-item">English Name</li>
                <li className="list-group-item">Position Type</li>
                <li className="list-group-item">
                  <h6>Steps to Get into the Pose</h6>
                </li>
                <li className="list-group-item">Step 1</li>
                <li className="list-group-item">Step 2</li>
                <li className="list-group-item">Step 3</li>
                <li className="list-group-item">Step 4</li>
                <li className="list-group-item">Step 5</li>
                <li className="list-group-item">
                  <b>Description:</b> Handstand half moon pose half boat pose eight angle pose child's pose frog pose
                  bird of paradise pose crab pose staff pose flying crow pose.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const temp = () => {
  return (
    <section className="scene scene--card">
      {/* front of card */}
      <section className="single-pose-image card">
        {/* <section className="card__face card__face--front"> */}
        <img
          src={require('../images/yoga_stock_img.jpg')}
          className="card__face card__face--front"
          alt="tree-pose-image"
        />
      </section>

      {/* back of card */}
      <section className="detail-card-outline card__face card__face--back">
        {/* <section className="card__face card__face--back"> */}
        <ol className="pose-details-list list-group">
          <li className="list-group-item">Sanskrit Name</li>
          <li className="list-group-item">English Name</li>
          <li className="list-group-item">Position Type</li>
          <li className="list-group-item">
            <h6>Steps to Get into the Pose</h6>
          </li>
          <li className="list-group-item">Step 1</li>
          <li className="list-group-item"> Step 2</li>
          <li className="list-group-item">Step 3</li>
          <li className="list-group-item">Step 4</li>
          <li className="list-group-item">Step 5</li>
          <li className="list-group-item">
            <b>Description:</b> Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of
            paradise pose crab pose staff pose flying crow pose.
          </li>
        </ol>
      </section>
    </section>
  )
}
export default YogaPose
