import React from 'react';
import Nav from '../components/Nav';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
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
                M'kay{' '}
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          .hero-wrapper {
            position: relative;
            margin-left: calc(100vw - 100%);
          }

          .hero-wrapper:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: url('/static/images/basement-404.gif');
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

          .button {
            display: inline-block;
            font-size: calc(18px + (16 - 18) * (100vw - 400px) / (1440 - 400));
            text-decoration: none;
            text-transform: uppercase;
            padding: 1em 3em;
            border: 1px solid rgb(256, 256, 256);
            background: var(--color-primary);
            color: var(--color-secondary);
            transition: all 200ms ease;
            float: right;
            margin-bottom: 1.5em;
          }

          .button:hover {
            box-shadow: 10px -10px 0 0 var(--color-secondary);
            transform: translate(-5px, 5px);
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
          }
        `}</style>
      </section>
    );
  }
}
