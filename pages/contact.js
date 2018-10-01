import React from "react";
import Head from "next/head";
import GaWrapper from "../components/GaWrapper";
import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const title = "basement.studio | Contact";

const Contact = () => (
  <main>
    <Head>
      <title>{title}</title>
    </Head>
    <Nav />
    <header>
      <h1>Let's chat.</h1>
      <h3>
        We spend a lot of time behind our computers and always welcome the
        opportunity to discuss your upcoming project and meet new faces.
      </h3>
      <p>
        Get in touch using the form below, shoot us an email, reach out on
        social media, heck – send a carrier pigeon. Regardless of how, we’d
        love to hear from you.
      </p>
    </header>
    <section>
      <ContactForm />
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
        margin-top: 7em;
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
          grid-template-areas: "header header" "subheader paragraph" "form form";
        }

        section {
          display: grid;
          grid-column-gap: 4.5em;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr auto;
          animation-delay: 800ms;
          margin-top: 7em;
          margin-bottom: 0;
        }

        h2 {
          grid-area: header;
        }

        h3 {
          grid-area: subheader;
          letter-spacing: -0.05em;
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

export default GaWrapper(Contact);
