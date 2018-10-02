import React from "react";

const Milestone = props => (
  <div
    className="wrapper"
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay={`${props.order}00`}
    data-aos-duration="1000"
    data-aos-easing="ease-out-quad"
    data-aos-once="true"
  >
    <h5>{props.counter}</h5>
    <h3>{props.description}</h3>
    {props.suffix && <h6>{props.suffix}</h6>}

    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
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
);

const ThreeColumnsLayout = () => (
  <section>
    <Milestone
      order={0}
      counter="4m"
      description="Lines of code pushed."
      suffix="Measuring programming progress by lines of code is like measuring aircraft building progress by weight, thanks Bill. (Ps. we don't count, it's an approximate)"
    />
    <Milestone order={5} counter="1" description="Arcade in progress." />
    <Milestone
      order={10}
      counter="14+"
      description="Cups of coffee a day."
      suffix="(but we're trying to quit, lol, not)"
    />
    <style jsx>{`
      @media (min-width: 1300px) {
        section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 60px;
        }
      }
    `}</style>
  </section>
);

export default ThreeColumnsLayout;
