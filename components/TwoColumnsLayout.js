import React from 'react';
import Link from './Link';

const TwoColumnsLayout = props => (
  <section
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="200"
    data-aos-duration="1000"
    data-aos-easing="ease-out-quad"
    data-aos-once="true"
  >
    <h3>{props.title}</h3>
    <p>{props.paragraph}</p>
    <style jsx>{`
      section {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        margin: 10.694vw 0;
      }

      @media all and (min-width: 600px) {
        section {
          grid-template-columns: 1fr 1.6fr;
        }
      }
    `}</style>
  </section>
);

export default TwoColumnsLayout;
