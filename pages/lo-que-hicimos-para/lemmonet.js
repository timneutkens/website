import React from 'react'
import AOS from 'aos'
import GaWrapper from '../../components/GaWrapper'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import FeaturedCard from '../../components/FeaturedCard'

class Lemmonet extends React.Component {
  componentDidMount () {
    AOS.init({ once: false, offset: 70, delay: 500, duration: 400 })
  }

  render () {
    return (
      <Layout>
        <div className='wrapper'>
          <h4>Branding + Website</h4>
          <h1>Not only a pretty face</h1>
          <p className='small'>
            Lemmonet got in touch with us to refresh and create a new brand
            universe. They wanted to communicate a sense of technology, blendend
            with their characteristic maturity gained after more than 10 years
            of experience.
          </p>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-branding-concepts.svg'
              alt=''
            />
          </figure>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-branding-palette.svg'
              alt=''
            />
          </figure>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-branding-font.svg'
              alt=''
            />
          </figure>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
            Every pretty thing in the universe has a name, so we name our
            colors. Period. Lemmonet Yellow is the primary and base color.
            Represents sensitivity, it's optimistic, and favors academic and
            analytical thinking, also it's related to wisdom and logic driven
            decision. The secondary color is Deep Purple. It's often associated
            with royalty, or value (as in poker chips), and bravery. As support
            colors we've chosen Pretty silver, which should be used for
            backgrounds, it represents maturity, and experience. And for the
            fonts I present to you our quite black. Associated with
            prestigiousness, sophistication, and usually industry leaders use
            black as main color.
          </p>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-brand-evolution.svg'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Branding evolution
          </h4>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-logo.svg'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Wordmark
          </h4>
          <p className='small' data-aos='fade-up' data-aos-easing='ease-in-out'>
            Simple, Clear, Serious, it does not only sends a message, it makes a
            statement. The logotype also tells a story, the L and M merge means
            how they've from the bottom, they've been through ups and downs, the
            double M's, but they're getting to the top, the E and T merge. Also
            it resembles to a Line chart that goes from the bottom to the top,
            and there's a hint to an arrow pointing up (like Lemmonet's clients
            sales and growth). Also some letters are joint when others are not.
            That's a wink to the analog and digital eras. Represents the
            coming-of-age era. The experience, and the adaptation to
            technologies. Last but not least, the accent of the last stop. the
            dot. Their freckle. It's their playful side, creative side, the part
            of them that breaks the mold and represents humanity.
          </p>
          <figure
            className='full-width'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-presentation.png'
              alt=''
            />
          </figure>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
            Nowadays, brands are no longer static, dynamism is part of the DNA
            of every startup, Here we show how the brand should be used in
            marketing announcements, advertising, and general communications.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-responsive.png'
              alt=''
            />
          </figure>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
            Finally, once all the brand guidelines were built, we had a strong
            foundation to build the website layout. Several wireframes and
            iterations where thrown to a browser. Terabytes of Sketch files
            after we nailed it. A website that transmitted all the values from
            the branding, using the new color scheme and fonts. Custom
            illustrations where a nice detail that Jose is really proud of.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-website.png'
              alt=''
            />
          </figure>
          <h2
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Keep browsing
          </h2>
        </div>
        <FeaturedCard
          backgroundimg='/static/images/device1.png'
          foregroundimg='/static/images/device2.png'
          foreMaxWidth='30%'
          paddingTop='12em'
          callToAction='READ MORE'
          link='/what-we-did-for/gamedex'
          subhead='NEXTjs WEBSITE'
          title='They were cool, we made them mean'
          description='Blockchain revolutionizes collectibles by making counterfeits impossible, transfers instant and limited edition cards provably rare. The next generation of fantasy creatures, digital pets, and sports cards is coming soon.'
          alt='Gamedex'
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

          @media (min-width: 900px) {
            .full-width {
              margin-left: calc(((100vw - 920px) / 2) * -1);
              margin-right: calc(((100vw - 920px) / 2) * -1);
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default GaWrapper(Lemmonet)
