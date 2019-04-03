import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaSequences extends Component {
  render() {
    return (
      <section>
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main>
          <ol>
            <li>
              <section>
                <h3>Class Name</h3>
                <section className="class-button-wrapper">
                  <button className="view-created-class-icon">
                    <i className="fas fa-angle-down fa-2x" />
                  </button>
                  <button className="edit-created-class-icon">
                    <i className="fas fa-pen fa-2x" />
                  </button>
                  <button className="delete-created-class-icon">
                    <i className="fas fa-trash-alt fa-2x" />
                  </button>
                </section>
              </section>
            </li>
            <li>
              <section>
                <h3>Class Name</h3>
                <section className="class-button-wrapper">
                  <button className="view-created-class-icon">
                    <i className="fas fa-angle-down fa-2x" />
                  </button>
                  <button className="edit-created-class-icon">
                    <i className="fas fa-pen fa-2x" />
                  </button>
                  <button className="delete-created-class-icon">
                    <i className="fas fa-trash-alt fa-2x" />
                  </button>
                </section>
              </section>
            </li>
            <li>
              <section>
                <h3>Class Name</h3>
                <section className="class-button-wrapper">
                  <button className="view-created-class-icon">
                    <i className="fas fa-angle-down fa-2x" />
                  </button>
                  <button className="edit-created-class-icon">
                    <i className="fas fa-pen fa-2x" />
                  </button>
                  <button className="delete-created-class-icon">
                    <i className="fas fa-trash-alt fa-2x" />
                  </button>
                </section>
              </section>
            </li>
          </ol>
        </main>
      </section>
    )
  }
}

export default YogaSequences
