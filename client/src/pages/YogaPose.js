import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaPose extends Component {
  render() {
    return (
      <section className="single-pose-container">
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main className="detail-card-outline">
          <section>
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
        </main>
      </section>
    )
  }
}

export default YogaPose
