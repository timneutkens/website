import React from "react";
import AOS from "aos";
import GaWrapper from "../components/GaWrapper";
import Layout from "../components/Layout";
import TwoColumnsLayout from "../components/TwoColumnsLayout";
import Team from "../components/Team";
import Header from "../components/Header";
import Contact from "../components/Contact";
import ThreeColumnsLayout from "../components/ThreeColumnsLayout";

class Blog extends React.Component {
  componentDidMount() {
    AOS.init({
      once: true
    });
  }
  render() {
    return (
      <Layout>
        <Header characters="13ch" title="Our work is serious, we are not." />
        <figure
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-out-quad"
          className="elgif"
        >
          <img src="static/images/pixel.gif" alt="" />
        </figure>

        <TwoColumnsLayout
          title="About us"
          paragraph="We get involved with your product as if it were our own. The passion we invest in the things we love is beyond measure. And if your brand is chosen as a client, you can bet we're loving it. You will be impressed by how many ideas we can throw against the wall in an hour. Our workflow is not standard, and neither are we -- or the brands we help create."
        />

        <Team />

        <TwoColumnsLayout
          title="What we believe in"
          paragraph="We believe in the power of great ideas. We believe in reaching real people — getting actual humans (who are busy, distracted, and not interested in ads) excited about brands, products and services. Every day we try to be a little bit smarter than we were yesterday. If you like your agencies vague and arrogant, sorry! We get excited by old-fashioned stuff like 'hard work', 'kindness' and 'collaboration'. We don't try to get work out of the way, we love what we do, and we want to do it all day, everyday, so why shouldn't we give the best we can, each time?"
        />

        <ThreeColumnsLayout />

        <Contact />

        <style jsx>{`
          figure {
            margin: 0;
          }

          .elgif {
            min-height: 500px;
          }

          .elgif img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 0;
            position: absolute;
            z-index: 3;
          }

          .elgif:before,
          .elgif:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            display: block;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .elgif:before {
            background: url("/static/images/patterns/microperforations.svg");
            border-left: 3px solid var(--color-primary);
            border-bottom: 5px solid var(--color-primary);
            z-index: 2;
            top: 11px;
            right: 11px;
          }

          .elgif:after {
            background: url("/static/images/patterns/slash.svg");
            z-index: 1;
            top: 25px;
            right: 23px;
          }
          img {
            width: 90%;
          }
          header {
            max-width: 1ch;
          }

          @media (min-width: 800px) {
            .elgif {
              min-height: 800px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default GaWrapper(Blog);
