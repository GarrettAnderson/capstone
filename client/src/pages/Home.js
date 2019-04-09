import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <section className="landing-pg-container">
        <header className="homepage-header">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>
        <main className="home-page-container">
          <section>
            <ul className="list-group">
              <Link to="/YogaHistory">
                <li className="list-group-item">
                  <h3>History</h3>
                </li>
              </Link>

              <Link to="/poses">
                <li className="list-group-item">
                  <h3>Poses</h3>
                </li>
              </Link>

              <Link to="/courses">
                <li className="list-group-item">
                  <h3>Classes</h3>
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
