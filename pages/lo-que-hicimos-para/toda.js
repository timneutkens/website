import React from 'react'
import AOS from 'aos'
import GaWrapper from '../../components/GaWrapper'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import FeaturedCard from '../../components/FeaturedCard'

class Toda extends React.Component {
  componentDidMount () {
    AOS.init({ once: false, offset: 70, delay: 500, duration: 400 })
  }

  render () {
    return (
      <Layout>
        <div className='wrapper'>
          <h4>Branding + Website</h4>
          <h1>Como hacer sexy a un protocolo de internet</h1>
          <p className='small'>
            TODA Network es la próxima evolución de TCP/IP para la transferencia de valor a través de la capa de comunicación y debajo del sistema operativo. Ellos nos contactaron para rediseñar su sitio web con el fin de obtener toda los atención de la comunidad blockchain.
          </p>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/toda/toda-branding-concepts.svg'
              alt=''
            />
          </figure>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/toda/toda-branding-palette.svg'
              alt=''
            />
          </figure>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/toda/toda-branding-font.svg'
              alt=''
            />
          </figure>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
            Tenían una marca básica, y algunas ideas de colores, pero el logotipo y la paleta no estaban lo suficientemente pulidos. Utilizamos gradientes para dar idea de movimiento, progresión. Un bloque cuadrado para representar estabilidad y seguridad, pero hueco, lo que significa que puede ser llenado con cualquiera sea el contenido. Dando a los usuarios la posibilidad de construir cualquier cosa sobre ello. Significativo, ¿verdad?
          </p>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/toda/toda-branding-process.svg'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Evolución de la marca
          </h4>
          <figure
            className='smallfigure'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <img
              src='/static/images/case-studies/toda/toda-branding-logotypo.svg'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Isologotipo
          </h4>
          <p className='small' data-aos='fade-up' data-aos-easing='ease-in-out'>
            Una vez más expresamos ideas complejas con ilustraciones simples. TODA y el hecho de ser un protocolo descentralizado sin contabilidad nos hizo realmente exprimir nuestros poderes de simplificación. Primero necesitábamos entender el producto, recién entonces podríamos comenzar a trabajar en un sistema de marca que realmente tuviera sentido.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/toda/toda-branding-nodes.svg'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Ilustración de nodos
          </h4>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/toda/toda-branding-illustration.svg'
              alt=''
            />
          </figure>
          <h4
            className='small'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            Concepto de protocolo
          </h4>
          <p className='small' data-aos='fade-up' data-aos-easing='ease-in-out'>
            El contenido del website no era estatico, usamos un CMS bastante nuevo llamado{' '}
            <a className='link' href='https://www.sanity.io/'>
              Sanity
            </a>{' '}
            que deberían checkear. permite customizaciones al vuelo, y tiene un dashboard realmente simple para ambos, nosotros desarrolladores y el equipo de marketing agregando contenido.
          </p>
          <div
            className='full-width'
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
          >
            <figure className='partyoverhere'>
              <img
                src='/static/images/case-studies/toda/toda-devices.png'
                alt=''
              />
            </figure>
          </div>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
          De repente estábamos ansiosos por usar el protocolo, parece algo más, no solo un conjunto de reglas frías para una máquina, sino un producto que atrae a los usuarios, y permite a los desarrolladores construir sobre él.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/toda/toda-big-screen.svg'
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
            background-color: #37a8f4;
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
            max-width: 70%;
          }
          @media (min-width: 900px) {
            .full-width {
              margin: 3rem 0;
              margin-left: calc(((100vw - 920px) / 2) * -1);
              margin-right: calc(((100vw - 920px) / 2) * -1);
            }

            .partyoverhere img {
              max-width: 40%;
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default GaWrapper(Toda)
