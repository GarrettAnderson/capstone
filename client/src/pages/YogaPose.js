import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaPose extends Component {
  state = {
    isFlipped: false
  }

  // toggleCardDisplay = () => {
  //   const currentState = this.state.active
  //   this.setState({
  //     active: !currentState
  //   })
  // }

  rotatePoseCard = () => {
    // when image is clicked:
    // trigger css class to apply 'rotatey' property
    // hide the pose image div
    // show the yoga pose details section
  }

  render() {
    return (
      <section className="single-pose-container">
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>

        <section className="scene scene--card">
          {/* front of card */}
          <section className="single-pose-image card">
            {/* <section className="card__face card__face--front"> */}
            <img
              src={require('../images/yoga_stock_img.jpg')}
              className="card__face card__face--front"
              alt="tree-pose-image"
              style={{ isFlipped: this.state.isFlipped }}
              onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
              // onClick={this.rotatePoseCard}
              //pose-detail-img
            />
          </section>

          {/* back of card */}
          <section
            className="detail-card-outline card__face card__face--back"
            style={{ isFlipped: this.state.isFlipped }}
            onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
          >
            {/* <section className="card__face card__face--back"> */}
            <ol className="pose-details-list list-group">
              <li className="list-group-item">Sanskrit Name</li>
              <li className="list-group-item">English Name</li>
              <li className="list-group-item">Position Type</li>
              {/* </ol>

            <ol className="pose-details-list list-group"> */}
              <li className="list-group-item">
                <h6>Steps to Get into the Pose</h6>
              </li>
              <li className="list-group-item">Step 1</li>
              <li className="list-group-item"> Step 2</li>
              <li className="list-group-item">Step 3</li>
              <li className="list-group-item">Step 4</li>
              <li className="list-group-item">Step 5</li>
              <li className="list-group-item">
                <b>Description:</b> Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird
                of paradise pose crab pose staff pose flying crow pose.
              </li>
            </ol>
          </section>
        </section>
      </section>
    )
  }
}

export default YogaPose
