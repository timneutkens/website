import React from 'react';
import Head from 'next/head';
import AOS from 'aos';
import GaWrapper from '../components/GaWrapper';
import Nav from '../components/Nav';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const title = 'basement.studio | Contact';

const TEST_URL =
  'https://script.google.com/macros/s/AKfycbzBrBAxiBrkCfA-k1DxaUOJ5pgXFmOT0tN6M6xybtk036reiGQ/exec';
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxYIubdHuV_ce8lqOVou_DW9-KD-DGzY2DkuaL7kl80jOypIdtl/exec';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AOS.init({
      once: true
    });
  }

  render() {
    return (
      <main>
        <Head>
          <title>{title}</title>
        </Head>
        <Nav />
        <header>
          <h1
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="cubic-bezier(.05, .69, .14, 1)"
          >
            Let's chat.
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-out-quad"
          >
            We spend a lot of time behind our computers and always welcome the
            opportunity to discuss your upcoming project and meet new faces.
          </h3>
          <p
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-out-quad"
          >
            Get in touch using the form below, shoot us an email, reach out on
            social media, heck – send a carrier pigeon. Regardless of how,
            we’d love to hear from you.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease-out-quad"
        >
          <ContactForm url={SCRIPT_URL} />
          <div className="find-us">
            <h3>Where to find us</h3>
            <div className="our-address">
              <h4>Our address:</h4>
              <p>Basement, Mar del Plata, Argentina.</p>
            </div>
            <div className="our-email">
              <h4>Email address:</h4>
              <a className="link" href="mailto:info@basement.studio">
                info@basement.studio
              </a>
            </div>
          </div>
        </section>
        <Footer />
        <style jsx>{`
          header {
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            animation-delay: 400ms;
            margin-top: 2.5em;
          }

          section {
            margin: 2em 0 3em 0;
          }

          .find-us h3 {
            margin: 0;
            margin-bottom: 1.6em;
          }

          .our-address {
            margin-bottom: 3.18em;
          }

          @media all and (min-width: 600px) {
            header {
              grid-column-gap: 4.5em;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr auto;
              grid-template-areas: 'header header' 'subheader paragraph' 'form form';
            }

            section {
              display: grid;
              grid-column-gap: 4.5em;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr auto;
              animation-delay: 800ms;
              margin-top: 2em;
              margin-bottom: 0;
            }

            h2 {
              grid-area: header;
            }

            h3 {
              grid-area: subheader;
              letter-spacing: -0.075em;
            }

            p {
              grid-area: paragraph;
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translate3d(0, 20px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
        `}</style>
      </main>
    );
  }
}

export default GaWrapper(Contact);
