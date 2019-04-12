import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import yogaStockImg from '../images/yoga_stock_img.jpg'

class YogaPoses extends Component {
  state = {
    poses: []
  }

  componentDidMount() {
    axios.get('/api/poses').then((response) => {
      console.log(response)
      this.setState({ poses: response.data })
    })
  }

  render() {
    return (
      <section className="main-poses-container">
        <header className="header-nav directory-header-nav">
          <Link to="/">
            <h1>Yogi Me</h1>
          </Link>
        </header>
        <main className="pose-directory-container">
          <ol>
            {/* each list item represents a left-scroll-able yoga pose category */}

            {/* <section className="pose-directory-row"> */}
            {this.state.poses.map((pose) => {
              return (
                <Link to={`/courses/${pose.course_id}/poses/${pose.id}`} key={pose.id} className="pose-directory-row">
                  <li>
                    <figure>
                      <img
                        src={pose.photo_url || yogaStockImg}
                        className="pose-gallery-img"
                        alt="specific-yoga-pose-img"
                      />
                      <figcaption>Yoga Pose Name</figcaption>
                    </figure>
                  </li>
                </Link>
              )
            })}
          </ol>
        </main>
      </section>
    )
  }
}

export default YogaPoses
