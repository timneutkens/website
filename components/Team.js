import React from 'react';
import Link from 'next/link';

const TeamMember = props => (
  <div
    className="wrapper"
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay={`${props.order}00`}
    data-aos-duration="1000"
    data-aos-easing="ease-out-quad"
    data-aos-once="true"
  >
    <figure>
      <img
        src={`/static/images/people/${props.thumbnail}`}
        alt={`${props.name} profile picture`}
      />
    </figure>

    <h3>{props.name}</h3>
    <h4>{props.position}</h4>
    <p>{props.description}</p>

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
        border: 1px solid var(--color-secondary);
      }
      h4 {
        margin: 0;
        margin-bottom: 0.8em;
      }
    `}</style>
  </div>
);

const JoinUs = props => (
  <React.Fragment>
    <Link href="/contact">
      <a
        className="wrapper"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay={`${props.order}00`}
        data-aos-duration="1000"
        data-aos-easing="ease-out-quad"
        data-aos-once="true"
      >
        <figure>
          <img
            src={`/static/images/people/${props.thumbnail}`}
            alt={`${props.name} profile picture`}
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
  </React.Fragment>
);

const Team = () => (
  <section>
    <TeamMember
      order={0}
      thumbnail="Jose.jpg"
      name="Jose Rago"
      position="Co-Founder & Product Designer"
      description="As a passionate designer and pixel-perfect enthusiast, I'm always focused on solving user experience problems and improving design processes for clients and internal teams. I'm constantly with my finger on the pulse of the latest technology to create innovative products"
    />
    <TeamMember
      order={5}
      thumbnail="Fran.jpg"
      name="Franco Arza"
      position="Co-Founder & Fullstack Developer"
      description="Former philosophy student, Full time programmer for five years (and counting) and web leader at basement.studio. Likes to gaze into the abyss, and into the horizon, because that's a cool thing to do on a profile picture. Always trying new stuff someone mentioned on reddit"
    />
    <JoinUs order={10} thumbnail="join-us.svg" />
    <style jsx>{`
      section {
        margin-bottom: 0;
      }
      @media (min-width: 800px) {
        section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 60px;
          margin-bottom: 5rem;
        }
      }
    `}</style>
  </section>
);

export default Team;
