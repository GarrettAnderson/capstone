import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <section className="landing-pg-container">
        <header className="homepage-header">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main className="home-page-container">
          <section>
            <ul className="list-group">
              <Link to="/YogaHistory">
                <li className="list-group-item">
                  <h3>Fun Facts</h3>
                </li>
              </Link>

              <Link to="/YogaPoses">
                <li className="list-group-item">
                  <h3>Pose Directory</h3>
                </li>
              </Link>

              <Link to="/YogaSequenceBuilder">
                <li className="list-group-item">
                  <h3>Your Classes</h3>
                </li>
              </Link>
            </ul>
          </section>
        </main>
      </section>
    )
  }
}

export default Home
