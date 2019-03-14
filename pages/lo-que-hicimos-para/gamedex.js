import React from 'react'
import AOS from 'aos'
import GaWrapper from '../../components/GaWrapper'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import FeaturedCard from '../../components/FeaturedCard'

class Gamedex extends React.Component {
  componentDidMount () {
    AOS.init({ once: false, offset: 70, delay: 500, duration: 400 })
  }
  render () {
    return (
      <Layout>
        <div className='wrapper'>
          <h4>NEXTJS WEBSITE</h4>
          <h1>
            Eran copados, <br />
            los hicimos malotes.
          </h1>
          <p className='small'>
          Gamedex quería un sitio web más oscuro, más rápido, que proyectara su espíritu en la ventana del navegador, terminamos añadiendo un poco de brillantina aquí y allá.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/gamedex/gamedex-big-screen.png'
              alt=''
            />
          </figure>

          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
          Las ilustraciones fueron redibujadas, su paleta de colores fue renovada completamente y utilizamos estilos de neón (que recuerdan a TRON) para crear un formato más digital y gamer. La mayoría de los items están flotando usando Efectos de parallax de última generación, imposible que se traqueteen, Y algunas cartas también se inclinan al pasar el ratón. Boom!
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/gamedex/gamedex-illustration.png'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Ilustraciones de Gamedex
          </h4>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/gamedex/gamedex-device.png'
              alt=''
            />
          </figure>
          <p className='small' data-aos='fade-up' data-aos-easing='ease-in-out'>
          Por suerte para nosotros, su marca ya era realmente genial. Ellos tenían manuales de marca y todo estaba bien documentado. Pero la marca carecía de espíritu. Les dimos un alma mediante la adición de piezas interactivas, los efectos de desvanecimiento a medida que se navega la pagina agregan sensación de actividad y movimiento que permiten vislumbrar una plataforma jovial detras de la marca tan agresiva.
          </p>
          <div
            className='full-width'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <figure className='partyoverhere'>
              <img
                src='/static/images/case-studies/gamedex/gamedex-devices.png'
                alt=''
              />
            </figure>
          </div>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
          No podíamos esperar a ver nuestro trabajo en vivo en producción. Es una bonita experiencia trabajandar con Gamedex, ahora que las bases para un sistema de marca está diseñado, estamos empezando a trabajar en el producto. Se desarrolla un sistema de marca sólida y reconocible. En todos lados.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/gamedex/gamedex-website.png'
              alt=''
            />
          </figure>
          <h2
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Seguir Mirando
          </h2>
        </div>
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
            margin: 0;
            background-color: #050c3b;
            max-height: 500px;
          }

          .partyoverhere {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            transform: translateY(-10%);
            margin: 0 auto;
          }
          .partyoverhere img {
            max-width: 90%;
          }
          @media (min-width: 900px) {
            .full-width {
              margin: 3rem 0;
              margin-left: calc(((100vw - 920px) / 2) * -1);
              margin-right: calc(((100vw - 920px) / 2) * -1);
            }

            .partyoverhere img {
              max-width: 60%;
            }
          }
          @media (min-width: 1800px) {
            .partyoverhere img {
              max-width: 50%;
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default GaWrapper(Gamedex)
