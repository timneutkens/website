import React from "react";
import AOS from "aos";
import GaWrapper from "../components/GaWrapper";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import FeaturedCard from "../components/FeaturedCard";

class Gamedex extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <h4>NEXTJS WEBSITE</h4>
          <h1>
            They were cool, <br />
            we made them mean.
          </h1>
          <p className="small">
            Gamedex wanted a darker, faster, better, stronger website that
            projected their spirit on the browser window, we just added a little
            glitter here and there.
          </p>
          <figure
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src="/static/images/case-studies/gamedex/gamedex-big-screen.png"
              alt=""
            />
          </figure>

          <p
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Assets were redrawn, Their complete color palette was revamped and
            we used neon styles (reminiscent of TRON) to create a more digital
            and gamer experience. Most of the assets are floating using
            state-of-the-art parallax effects. And some cards also tilt on hover
            tracking the mouse position.
          </p>
          <figure
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src="/static/images/case-studies/gamedex/gamedex-illustration.png"
              alt=""
            />
          </figure>
          <h4
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Gamedex illustrations
          </h4>
          <figure
            className="smallfigure"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src="/static/images/case-studies/gamedex/gamedex-device.png"
              alt=""
            />
          </figure>
          <p
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Luckily for us, mainly, their brand was already really cool. They
            had brand manuals and everything was well documented. But the brand
            was lacking spirit. We gave this brand a soul by adding interactive
            pieces, fade effects as you scroll (that doesn't take forever
            rendering a blank page that generates a what-am-I-doing-here
            feeling). Darker colors, Neon everywhere, It screams games and
            cards.
          </p>
          <div
            className="full-width"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <figure className="partyoverhere">
              <img
                src="/static/images/case-studies/gamedex/gamedex-devices.png"
                alt=""
              />
            </figure>
          </div>
          <p
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            We couldn't wait to see our work live on production. It is a nice
            experience working with Gamedex, Now that the foundations for a
            brand system is laid out we're starting to work on the product
            itself to develop a solid brand system that is recognizable
            everywhere.
          </p>
          <figure>
            <img
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              src="/static/images/case-studies/gamedex/gamedex-website.png"
              alt=""
            />
          </figure>
          <h2
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Keep browsing
          </h2>
        </div>
        <FeaturedCard
          backgroundimg="/static/images/device6.png"
          foregroundimg="/static/images/device7.png"
          foreMaxWidth="18%"
          callToAction="LEARN MORE"
          link="/imusify"
          subhead="NEXTjs WEBSITE"
          title="Cut the middleman"
          description="imusify got in touch with basement.studio to build an interactive responsive website to promote and find investors in their brand new ICO and also their revolutionary crypto platform to listen and share music."
        />
        <Contact />
        <style jsx>{`
          .wrapper {
            max-width: 900px;
            align-items: center;
            display: flex;
            flex-direction: column;
            margin: 5em auto;
          }
          h1 {
            margin-top: 0.2em;
            margin-bottom: 0;
            align-self: center;
            text-align: center;
          }
          h2.small {
            margin-top: 2em;
          }

          p {
            margin: 0;
            margin-bottom: 7em;
            margin-top: 7em;
          }

          p.small {
            margin: 0;
            margin-bottom: 5em;
            margin-top: 2em;
          }

          h4 {
            margin-bottom: 0;
          }

          h4.small {
            margin-bottom: 8em;
          }
          img {
            max-width: 100%;
            margin: 0 auto;
          }
          figure {
            margin: 0;
          }
          figure.smallfigure {
            margin-bottom: 4em;
          }
          .full-width {
            margin: 5em 0;
            background-color: #050c3b;
            max-height: 500px;
            margin-left: calc(((100vw - 920px) / 2) * -1);
            margin-right: calc(((100vw - 920px) / 2) * -1);
          }

          .partyoverhere {
            width: 60%;
            transform: translateY(-10%);
            margin: 0 auto;
          }
        `}</style>
      </Layout>
    );
  }
}

export default GaWrapper(Gamedex);
