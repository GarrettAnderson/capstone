import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import yogaStockImg from '../images/yoga_stock_img.jpg'

class YogaPoses extends Component {
  state = {
    poses: [],
    name: ''
  }

  componentDidMount() {
    axios.get('/api/poses').then((response) => {
      console.log(response)
      this.setState({ poses: response.data })
    })
  }

  handleSearchChange = (event) => {
    const yoga_pose_name = event.target.value
    console.log(yoga_pose_name)
    this.setState({ name: yoga_pose_name }, () => {
      axios.get(`http://localhost:3001/api/poses?name=${this.state.name}`).then((response) => {
        console.log(response)
        this.setState({
          poses: response.data
        })
      })
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
          {/* <label>Search poses:</label>
          <input value={this.state.name} onChange={this.handleSearchChange} /> */}
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
                      <figcaption>{pose.name}</figcaption>
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
