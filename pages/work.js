import React, { useEffect } from "react"
import AOS from "aos"
import GaWrapper from "../components/GaWrapper"
import Layout from "../components/Layout"
import Header from "../components/Header"
import FeaturedCard from "../components/FeaturedCard"
import Contact from "../components/Contact"

function Work() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <Header title="Work hard. Be smart.Have fun." centered />
      <FeaturedCard
        backgroundimg="/static/images/device1.png"
        foregroundimg="/static/images/device2.png"
        foreMaxWidth="30%"
        paddingTop="2em"
        link="/what-we-did-for/gamedex"
        subhead="NEXTjs WEBSITE"
        callToAction="READ MORE"
        title="They were cool, we made them mean"
        description="Blockchain revolutionizes collectibles by making counterfeits impossible, transfers instant and limited edition cards provably rare. The next generation of fantasy creatures, digital pets, and sports cards is coming soon."
        alt="Gamedex"
      />
      <FeaturedCard
        backgroundimg="/static/images/device4.png"
        foregroundimg="/static/images/device3.png"
        foreMaxWidth="80%"
        backMaxWidth="60%"
        inverted
        link="/what-we-did-for/toda"
        subhead="BRANDING & WEBSITE"
        callToAction="KNOW MORE"
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
        link="/what-we-did-for/imusify"
        subhead="NEXTjs WEBSITE"
        callToAction="LEMME CHECK"
        title="Cut the middleman"
        description="imusify got in touch with basement.studio to build an interactive responsive website to promote and find investors in their brand new ICO and also their revolutionary crypto platform to listen and share music."
        alt="imusify"
      />
      <FeaturedCard
        backgroundimg="/static/images/device8.png"
        foregroundimg="/static/images/device9.png"
        foreMaxWidth="65%"
        backMaxWidth="80%"
        inverted
        link="/what-we-did-for/lemmonet"
        subhead="BRANDING & WEBSITE"
        callToAction="READ MORE"
        title="Not only a pretty face"
        description="Lemmonet got in touch with us to refresh and create a new brand
          universe. They wanted to communicate a sense of technology, blendend
          with their characteristic maturity gained after more than 10 years
          of experience."
        alt="Lemmonet"
      />

      <style jsx>{`
        header {
          max-width: 10ch;
          margin: 0;
        }
      `}</style>

      <Contact />
    </Layout>
  )
}

export default GaWrapper(Work)
