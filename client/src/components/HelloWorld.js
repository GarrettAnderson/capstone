import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return (
      <section>
        {/* SplashPage HTML */}
        <header>
          <h1>The Yogi Me</h1>
        </header>
        <main>
          <section>
            <h3>Fun Facts</h3>
          </section>
          <section>
            <h3>Pose Directory</h3>
          </section>
          <section>
            <h3>Your Classes</h3>
          </section>
        </main>
        {/* SplashPage end */}

        {/* Fun Facts HTML */}
        <header>
          <nav>The Yogi Me</nav>
        </header>
        <main>
          <ol>
            <li>
              <figure>
                <header>Date</header>
                <figcaption>
                  Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of paradise pose
                  crab pose staff pose flying crow pose sage koundinya i pose one-legged king pigeon pose ii eagle pose
                  cow face pose marichi's pose ii big toe pose gate pose full boat pose marichi's pose iii, seated twist
                  side crane pose, side crow pose yoga plank pose shoulderstand, supported shoulderstand locust pose
                  easy pose knees to chest pose upward facing dog pose chair pose warrior ii pose hero pose.
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <header>Date</header>
                <figcaption>
                  Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of paradise pose
                  crab pose staff pose flying crow pose sage koundinya i pose one-legged king pigeon pose ii eagle pose
                  cow face pose marichi's pose ii big toe pose gate pose full boat pose marichi's pose iii, seated twist
                  side crane pose, side crow pose yoga plank pose shoulderstand, supported shoulderstand locust pose
                  easy pose knees to chest pose upward facing dog pose chair pose warrior ii pose hero pose.
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <header>Date</header>
                <figcaption>
                  Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of paradise pose
                  crab pose staff pose flying crow pose sage koundinya i pose one-legged king pigeon pose ii eagle pose
                  cow face pose marichi's pose ii big toe pose gate pose full boat pose marichi's pose iii, seated twist
                  side crane pose, side crow pose yoga plank pose shoulderstand, supported shoulderstand locust pose
                  easy pose knees to chest pose upward facing dog pose chair pose warrior ii pose hero pose.
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <header>Date</header>
                <figcaption>
                  Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of paradise pose
                  crab pose staff pose flying crow pose sage koundinya i pose one-legged king pigeon pose ii eagle pose
                  cow face pose marichi's pose ii big toe pose gate pose full boat pose marichi's pose iii, seated twist
                  side crane pose, side crow pose yoga plank pose shoulderstand, supported shoulderstand locust pose
                  easy pose knees to chest pose upward facing dog pose chair pose warrior ii pose hero pose.
                </figcaption>
              </figure>
            </li>
          </ol>
        </main>
        {/* Fun Facts end */}

        {/* Yoga Poses */}
        <header>
          <nav>The Yogi Me</nav>
        </header>
        <main>
          <ol>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
          </ol>
        </main>
        {/* Yoga Poses end*/}

        {/* Yoga Pose Detail */}
        <header>
          <nav>The Yogi Me</nav>
        </header>
        <main>
          <figure>
            <img src={require('../images/yoga_stock_img.jpg')} className="pose-detail-img" />
            <ol>
              <li>
                <h2>Sanskrit Name</h2>
              </li>
              <li>
                <h3>English Name</h3>
              </li>
              <li>Position Type</li>
            </ol>
            <h2>Steps to Get into the Pose</h2>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
            <li>Step 5</li>
            <figcaption>
              <h3>Description</h3>Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird
              of paradise pose crab pose staff pose flying crow pose.
            </figcaption>
          </figure>
        </main>
        {/* Yoga Pose Detail end */}

        {/* Yoga Class Tab */}
        <header>
          <nav>The Yogi Me</nav>
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
        {/* Yoga Class Tab end */}

        {/* Create Yoga Class Tab */}
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
        {/* Create Yoga Class Tab end */}
      </section>
    )
  }
}

export default HelloWorld
