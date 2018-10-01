import React from 'react';
import AOS from 'aos';
import GaWrapper from '../components/GaWrapper';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import FeaturedCard from '../components/FeaturedCard';
import TodaBrandingConcepts from '../static/images/case-studies/toda/toda-branding-concepts.svg';
import TodaBrandingPalette from '../static/images/case-studies/toda/toda-branding-palette.svg';
import TodaBrandingFont from '../static/images/case-studies/toda/toda-branding-font.svg';
import TodaBrandingProcess from '../static/images/case-studies/toda/toda-branding-process.svg';
import TodaBrandingLogoTypo from '../static/images/case-studies/toda/toda-branding-logotypo.svg';

class Toda extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <h4>Branding + Website</h4>
          <h1>How to make an internet protocol sexy</h1>
          <p className="small">
            TODA Network is the next evolution of TCP/IP for value transfer over
            the communication layer and below the operating system. They
            contacted us to redesign their website in order to get all the
            blockchain-community's attention.
          </p>
          <figure
            className="smallfigure"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <TodaBrandingConcepts />
          </figure>
          <figure
            className="smallfigure"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <TodaBrandingPalette />
          </figure>
          <figure
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <TodaBrandingFont />
          </figure>
          <p
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            They had a basic branding, and some color ideas, but the logo and
            palette wasn't polished enough. We used gradients to resemble
            movement, progression. A block square to give the idea of stability
            and security, but it's hollow meaning it can be filled with
            whichever content. Given the users the posibility to build anything
            upon it. Meaningful, right?
          </p>
          <figure
            className="smallfigure"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <TodaBrandingProcess />
          </figure>
          <h4
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Branding evolution
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
              src="/static/images/case-studies/toda/toda-branding-logotypo.svg"
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
            Wordmark
          </h4>
          <p
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Once again we express complex ideas with simple illustrations. Toda
            being a descentralized ledgerless protocol made us really squeeze
            our powers of simplification. First we needed to understand the
            product, then we could start working on a brand system that really
            made sense.
          </p>
          <figure
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src="/static/images/case-studies/toda/toda-branding-nodes.svg"
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
            Nodes illustration
          </h4>
          <figure
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src="/static/images/case-studies/toda/toda-branding-illustration.svg"
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
            Protocol concept
          </h4>
          <p
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            The content used in the website wasn't static, we used a new CMS
            called{' '}
            <a className="link" href="https://www.sanity.io/">
              Sanity
            </a>{' '}
            that you should definitely check out, allowing customizations on the
            fly. And a really easy to use dashboard for both, us developing and
            the marketing team adding content.
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
                src="/static/images/case-studies/toda/toda-devices.png"
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
            Suddenly we were eager to use the protocol, it looks like something
            else, not just a cold set of rules for a machine, but a product that
            engage users, and allows developers to build upon.
          </p>
          <figure>
            <img
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              src="/static/images/case-studies/toda/toda-big-screen.svg"
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
          backgroundimg="/static/images/device1.png"
          foregroundimg="/static/images/device2.png"
          foreMaxWidth="30%"
          paddingTop="12em"
          callToAction="READ MORE"
          link="/gamedex"
          subhead="NEXTjs WEBSITE"
          title="They were cool, we made them mean"
          description="Blockchain revolutionizes collectibles by making counterfeits impossible, transfers instant and limited edition cards provably rare. The next generation of fantasy creatures, digital pets, and sports cards is coming soon."
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
            align-self: flex-start;
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

          .partyoverhere {
            width: 70%;
            transform: translateY(-10%);
            margin: 0 auto;
          }

          .full-width {
            margin: 1.5em 0;
            background-color: #37a8f4;
            max-height: 500px;
          }

          @media (min-width: 900px) {
            .full-width {
              margin: 3.5em 0;
              margin-left: calc(((100vw - 920px) / 2) * -1);
              margin-right: calc(((100vw - 920px) / 2) * -1);
            }
            .partyoverhere {
              width: 45%;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default GaWrapper(Toda);
