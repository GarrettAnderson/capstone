import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import instructorImg from '../images/Instructor.jpeg'

class MyMat extends Component {
  render() {
    return (
      <section className="my-mat">
        <header className="header-nav">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>
        <main>
          <ol>
            <li>
              <article>
                <aside>
                  <img src={instructorImg} /> <p>Image of Instructor and className</p>
                </aside>
                <section>
                  Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of paradise pose
                  crab pose staff pose flying crow pose sage koundinya i pose one-legged king pigeon pose ii eagle pose
                  cow face pose marichi's pose ii big toe pose gate pose full boat pose marichi's pose iii, seated twist
                  side crane pose, side crow pose yoga plank pose shoulderstand, supported shoulderstand locust pose
                  easy pose knees to chest pose upward facing dog pose chair pose warrior ii pose hero pose.
                </section>
              </article>
            </li>
          </ol>
        </main>
      </section>
    )
  }
}

export default MyMat
