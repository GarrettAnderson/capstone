import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import instructorImg from '../images/profile_pic.jpg'

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
                  <img src={instructorImg} alt="instructor" />
                  <header>
                    <h3>Garrett Lee Graham Anderson</h3>
                  </header>
                </aside>
                <section>
                  <p>
                    Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of paradise
                    pose crab pose staff pose flying crow pose sage koundinya i pose one-legged king pigeon pose ii
                    eagle pose cow face pose marichi's pose ii big toe pose gate pose full boat pose marichi's pose iii,
                    seated twist side crane pose, side crow pose yoga plank pose shoulderstand, supported shoulderstand
                    locust pose easy pose knees to chest pose upward facing dog pose chair pose warrior ii pose hero
                    pose.
                  </p>
                </section>
              </article>
            </li>
            {/* <li>
              <article>
                <aside>
                  <img src={instructorImg} alt="instructor-image" />
                  <header>
                    <h3>Course Name</h3>
                  </header>
                </aside>
                <section>
                  <p>
                    Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of paradise
                    pose crab pose staff pose flying crow pose sage koundinya i pose one-legged king pigeon pose ii
                    eagle pose cow face pose marichi's pose ii big toe pose gate pose full boat pose marichi's pose iii,
                    seated twist side crane pose, side crow pose yoga plank pose shoulderstand, supported shoulderstand
                    locust pose easy pose knees to chest pose upward facing dog pose chair pose warrior ii pose hero
                    pose.
                  </p>
                </section>
              </article>
            </li> */}
          </ol>
        </main>
      </section>
    )
  }
}

export default MyMat
