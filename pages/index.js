import React from 'react'
import AOS from 'aos'
import GaWrapper from '../components/GaWrapper'
import Layout from '../components/Layout'
import Header from '../components/Header'
import FeaturedCard from '../components/FeaturedCard'
import Contact from '../components/Contact'
import CssDesignAwards from '../components/CssDesignAwards'

class Index extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    AOS.init({
      once: true
    })
  }

  render () {
    return (
      <Layout animate>
        <Header
          shouldScroll
          title='Un estudio digital que construye experiencias rentables con gente increible.'
          characters='20ch'
        />
        <h2
          data-aos='fade-right'
          data-aos-offset='50'
          data-aos-delay='200'
          data-aos-duration='500'
          data-aos-easing='ease-in-out'
        >
          Nuestros trabajos recientes
        </h2>
        <FeaturedCard
          backgroundimg='/static/images/device1.png'
          foregroundimg='/static/images/device2.png'
          foreMaxWidth='30%'
          paddingTop='6em'
          callToAction='LEER MAS'
          link='lo-que-hicimos-para/gamedex'
          subhead='NEXTjs WEBSITE'
          title='Ellos eran cool, nosotros los hicimos malotes.'
          description='La tecnologia del Blockchain revoluciona la industria de los coleccionables haciendo imposible la falsificacion y copiado de articulos. Transferencias instantaneas y tarjetas de edicion limitada cuya rareza es probable. La proxima generacion de criaturas de fantasia, mascotas digitales, y tarjetas de deportes esta llegando.'
          alt='Gamedex'
        />
        <FeaturedCard
          backgroundimg='/static/images/device4.png'
          foregroundimg='/static/images/device3.png'
          foreMaxWidth='80%'
          backMaxWidth='60%'
          callToAction='SABER MAS'
          inverted
          link='lo-que-hicimos-para/toda'
          subhead='BRANDING & WEBSITE'
          title='Como hacer un protocolo de internet parecer sexy'
          description='TODA Network es la próxima evolución de TCP/IP para la transferencia de valor a través de la capa de comunicación y debajo del sistema operativo. Ellos nos contactaron para rediseñar su sitio web con el fin de obtener toda los atención de la comunidad blockchain.'
          alt='TODA'
        />
        <FeaturedCard
          backgroundimg='/static/images/device6.png'
          foregroundimg='/static/images/device7.png'
          foreMaxWidth='18%'
          callToAction='A VER!'
          link='lo-que-hicimos-para/imusify'
          subhead='NEXTjs WEBSITE'
          title='Saca gente del medio'
          description='imusify se puso en contacto con basement.studio para crear un sitio web interactivo para promocionar y encontrar inversores en su oferta inicial de moneda y también mejorar la interfaz y experiencia de usuario en su revolucionaria plataforma criptográfica para escuchar y compartir música.'
          alt='imusify'
        />
        <Contact />
        <style jsx>{`
          h2 {
            margin-top: 2.5em;
            margin-bottom: 0;
          }
        `}</style>
      </Layout>
    )
  }
}

export default GaWrapper(Index)
