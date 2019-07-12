import React from "react"
import Nav from "../components/Nav"
import Layout from "../components/Layout"

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <section className="hero-wrapper">
          <div className="hero-content">
            <Nav />
            <div className="content-box">
              <div className="window">
                <h4 className="title">Basement 404 error</h4>
                <span>x</span>
              </div>
              <div className="content">
                <p>
                  How did you find the basement, pal? <br /> go home!
                </p>
                <a className="button" href="/index">
                  M'kay
                </a>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .hero-wrapper {
            position: relative;
            margin-left: calc(100vw - 100%);
          }

          .hero-wrapper:before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: url("/static/images/basement-404.gif");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            animation: fucking-cool 1s forwards;
          }

          .hero-content {
            position: relative;
            padding-top: 4.17vw;
            height: calc(100vh - 4.17vw);
            max-width: 86.1vw;
            margin: 4.17vw auto;
            margin-top: 0;
          }

          @keyframes fucking-cool {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.3;
            }
          }
          .content-box {
            position: absolute;
            left: 50%;
            top: 50%;
            padding: 0;
            padding-bottom: 2em;
            transform: translate(-50%, -50%);
            width: 90vw;
            border-style: solid;
            border-width: 1px;
            border-color: var(--color-secondary);
            background-color: rgba(0, 0, 0, 0.8);
          }
          .window {
            display: flex;
            padding: 0 1.5em;
            border-bottom: 1px solid var(--color-secondary);
            justify-content: space-between;
            align-items: center;
          }
          .content {
            padding: 0 1.5em;
          }

          @media (min-width: 800px) {
            .content-box {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 40vw;
              border-style: solid;
              border-width: 1px;
              border-color: var(--color-secondary);
              background-color: rgba(0, 0, 0, 0.8);
            }
            .button {
              float: right;
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default Error
