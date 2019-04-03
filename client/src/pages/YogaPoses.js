import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaPoses extends Component {
  render() {
    return (
      <section className="main-poses-container">
        <header className="header-nav directory-header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main className="pose-directory-container">
          <ol>
            {/* each list item represents a left-scroll-able yoga pose category */}

            <section className="pose-directory-row">
              <li>
                <figure>
                  <img
                    src={require('../images/yoga_stock_img.jpg')}
                    className="pose-gallery-img"
                    alt="specific-yoga-pose-img"
                  />
                  <figcaption>Yoga Pose Name</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src={require('../images/yoga_stock_img.jpg')}
                    className="pose-gallery-img"
                    alt="specific-yoga-pose-img"
                  />
                  <figcaption>Yoga Pose Name</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src={require('../images/yoga_stock_img.jpg')}
                    className="pose-gallery-img"
                    alt="specific-yoga-pose-img"
                  />
                  <figcaption>Yoga Pose Name</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src={require('../images/yoga_stock_img.jpg')}
                    className="pose-gallery-img"
                    alt="specific-yoga-pose-img"
                  />
                  <figcaption>Yoga Pose Name</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src={require('../images/yoga_stock_img.jpg')}
                    className="pose-gallery-img"
                    alt="specific-yoga-pose-img"
                  />
                  <figcaption>Yoga Pose Name</figcaption>
                </figure>
              </li>
            </section>
          </ol>
        </main>
      </section>
    )
  }
}

export default YogaPoses
