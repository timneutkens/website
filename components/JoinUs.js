import React from "react"
import Link from "./Link"

function JoinUs({ order, thumbnail, name }) {
  return (
    <>
      <Link scroll={false} href="/contact">
        <a
          className="wrapper"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay={`${order}00`}
          data-aos-duration="1000"
          data-aos-easing="ease-out-quad"
          data-aos-once="true"
        >
          <figure>
            <img
              src={`/static/images/people/${thumbnail}`}
              alt={`${name} profile picture`}
            />
          </figure>
        </a>
      </Link>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 2em;
        }
        figure {
          position: relative;
          margin: 0;
          margin-bottom: 0.8em;
        }
        img {
          width: 100%;
          opacity: 1;
          transition: transform 200ms ease-in;
        }
        h4 {
          margin: 0;
          margin-bottom: 0.8em;
        }
      `}</style>
    </>
  )
}

export default JoinUs
