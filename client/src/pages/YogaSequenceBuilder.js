import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import YogaSequenceBuilder from './pages/YogaSequenceBuilder'

class YogaSequenceBuilder extends Component {
  render() {
    return (
      <section>
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main className="create-yoga-container">
          <section className="yoga-pose-index">
            <aside>
              <h2>Category</h2>
              <ol>
                <section>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                </section>
                <section>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                </section>
              </ol>
              <h2>Category</h2>
              <ol>
                <section>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                </section>
                <section>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                </section>
              </ol>
              <h2>Category</h2>
              <ol>
                <section>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                </section>
                <section>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                  <li>
                    <img
                      src={require('../images/yoga_stock_img.jpg')}
                      alt="tree-pose-stock-photo"
                      className="pose-index-gallery"
                    />
                  </li>
                </section>
              </ol>
            </aside>
          </section>
          <section className="yoga-sequence">
            <input
              className="drop-image-for-sequence"
              placeholder="Click image on the left to create your yoga sequence"
            />
          </section>
        </main>
      </section>
    )
  }
}

export default YogaSequenceBuilder
