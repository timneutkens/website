import React from "react"

function Milestone({ order, counter, description, suffix }) {
  return (
    <div
      className="wrapper"
      data-aos="fade-up"
      data-aos-offset="-100"
      data-aos-delay={`${order}00`}
      data-aos-duration="1000"
      data-aos-easing="ease-out-quad"
      data-aos-once="true"
    >
      <h5>{counter}</h5>
      <h3>{description}</h3>
      {suffix && <h6>{suffix}</h6>}

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--color-tertiary);
          margin-bottom: 7rem;
        }
        h5 {
          padding-top: 0.7em;
          margin: 0;
        }
        h3 {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Milestone
