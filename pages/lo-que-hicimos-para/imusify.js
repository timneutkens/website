import React from 'react'
import AOS from 'aos'
import GaWrapper from '../../components/GaWrapper'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import FeaturedCard from '../../components/FeaturedCard'

class Imusify extends React.Component {
  componentDidMount () {
    AOS.init({ once: false, offset: 70, delay: 500, duration: 400 })
  }

  render () {
    return (
      <Layout>
        <div className='wrapper'>
          <h4>NEXTJS WEBSITE</h4>
          <h1>Sacá gente del medio</h1>
          <p className='small'>
            Imusify quería un nuevo sitio web para promocionar su ICO. Los materiales de la marca necesitaban una actualización, y después de un par de revisiones, Acordó la estética general de la marca.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/imusify/imusify-bigscreen.png'
              alt=''
            />
          </figure>

          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
            En la mayoría de las startups relacionadas con blockchain, la solución detrás del producto es usualmente un poco compleja para gente a pie, usualmente dibujamos algunos bocetos para traducir esos conceptos en ilustraciones simples de entender.
          </p>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/imusify/imusify-illustrations.svg'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Ilustraciones de imusify
          </h4>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/imusify/imusify-devices.png'
              alt=''
            />
          </figure>
          <p className='small' data-aos='fade-up' data-aos-easing='ease-in-out'>
          Después de solo un par de wireframes, el diseño fue acordado y empezamos a trabajar en el sistema de diseño baseado en Componentes. Componentes que ahora se pueden compartir entre su aplicación y el sitio web, lo que permite Mostrar información en tiempo real en la web. Reutilizando toneladas de código.
          </p>
          <div
            className='full-width'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <figure className='partyoverhere'>
              <img
                src='/static/images/case-studies/imusify/imusify-ipad.png'
                alt=''
              />
            </figure>
          </div>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
            El patrón de olas alude a las ondas de sonido. Es un concepto simple que unifica las guias de la marca sobre las que construimos su imagen.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/imusify/imusify-website.png'
              alt=''
            />
          </figure>
          <h2
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Seguir mirando
          </h2>
        </div>
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
            background-color: #ea3f4f;
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

export default GaWrapper(Imusify)
