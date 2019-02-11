import React from 'react';
import AOS from 'aos';
import GaWrapper from '../components/GaWrapper';
import Layout from '../components/Layout';
import Header from '../components/Header';
import FeaturedCard from '../components/FeaturedCard';
import Contact from '../components/Contact';
import CssDesignAwards from '../components/CssDesignAwards';

class Index extends React.Component {
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
      <Layout animate>
        <Header
          shouldScroll
          title="A digital studio that builds profitable experiences with awesome people."
        />
        <h2
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Our recent projects
        </h2>
        <FeaturedCard
          backgroundimg="/static/images/device1.png"
          foregroundimg="/static/images/device2.png"
          foreMaxWidth="30%"
          paddingTop="6em"
          callToAction="READ MORE"
          link="what-we-did-for/gamedex"
          subhead="NEXTjs WEBSITE"
          title="They were cool, we made them mean"
          description="Blockchain revolutionizes collectibles by making counterfeits impossible, transfers instant and limited edition cards provably rare. The next generation of fantasy creatures, digital pets, and sports cards is coming soon."
          alt="Gamedex"
        />
        <FeaturedCard
          backgroundimg="/static/images/device4.png"
          foregroundimg="/static/images/device3.png"
          foreMaxWidth="80%"
          backMaxWidth="60%"
          callToAction="KNOW MORE"
          inverted
          link="what-we-did-for/toda"
          subhead="BRANDING & WEBSITE"
          title="How to make an internet protocol sexy"
          description="TODA Network is the next evolution of TCP/IP for value transfer over
          the communication layer and below the operating system. They
          contacted us to redesign their website in order to get all the
          blockchain-community's attention."
          alt="TODA"
        />
        <FeaturedCard
          backgroundimg="/static/images/device6.png"
          foregroundimg="/static/images/device7.png"
          foreMaxWidth="18%"
          callToAction="LEARN MORE"
          link="what-we-did-for/imusify"
          subhead="NEXTjs WEBSITE"
          title="Cut the middleman"
          description="imusify got in touch with basement.studio to build an interactive responsive website to promote and find investors in their brand new ICO and also their revolutionary crypto platform to listen and share music."
          alt="imusify"
        />
        <Contact />
        <style jsx>{`
          h2 {
            margin-top: 2.5em;
            margin-bottom: 0;
          }
        `}</style>
      </Layout>
    );
  }
}

export default GaWrapper(Index);
