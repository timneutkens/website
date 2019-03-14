import React from 'react';

class ScrollDownButton extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollALittle() {
    window.scroll({
      top: 850,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <span className="scroll-down">
        <h4
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="850"
          data-aos-duration="1000"
          data-aos-easing="ease-out-quad"
        >
          Bajar
        </h4>
        <button onClick={this.scrollALittle} type="button" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 27 36"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="850"
            data-aos-duration="1000"
            data-aos-easing="ease-out-quad"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M24 19.8l-8.6 8.600001V.2h-4v28.200001L2.8 19.8 0 22.6 13.4 36l13.4-13.4z"
            />
          </svg>
        </button>
        <style jsx>{`
          .scroll-down {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
            transition: opacity 200ms ease;
            position: absolute;
            left: 50%;
            bottom: 1%;
            transform: translateX(-50%);
          }

          button:hover {
            opacity: 0.7;
          }

          button:focus,
          button:active {
            outline: none;
          }

          button {
            appearance: none;
            border: none;
            cursor: pointer;
            padding: 0;
            margin: 0 auto;
            background: none;
            width: 1.8em;
          }

          button svg {
            animation: scrollDown 1.5s infinite alternate;
            animation-delay: 2s;
            transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
          }

          @keyframes scrollDown {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, -10px, 0);
            }
          }
        `}</style>
      </span>
    );
  }
}

export default ScrollDownButton;
