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
          <h1>No solo una cara bonita</h1>
          <p className='small'>
            Lemmonet se puso en contacto con nosotros para actualizar y crear una nueva marca. Querían comunicar un sentido de tecnología, y mezclarlo con su madurez característica ganada después de más de 10 años de experiencia.
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
            Cada cosa bonita en el universo tiene un nombre, por eso damos nombre a nuestro colores. Lemmonet Yellow es el color primario y básico. Representa sensibilidad, es optimista, y favorece el pensamiento analítico, también está relacionado con la sabiduría y la lógica. El color secundario es Deep Purple. Es a menudo asociado con la realeza, o el valor (como en las fichas de póquer), y la valentía. Como soporte los colores que hemos elegido son Pretty Silver, que debería usarse para fondos, representa madurez y experiencia. Y para las tipografías les presento a nuestro Quite Black. Asociado con el prestigio y la sofisticación,usualmente los líderes de la industria usan negro como color principal.
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
            Evolución de la marca
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
            Isotipo
          </h4>
          <p className='small' data-aos='fade-up' data-aos-easing='ease-in-out'>
          Simple, claro, serio, no solo envía un mensaje, hace un declaración. El logotipo también cuenta una historia, las letras L y M se fusionan. Hechos desde abajo, han pasado por altibajos, la Doble M, pero están llegando a la cima, la E y la T se fusionan. también se asemeja a un gráfico de líneas que va de abajo hacia arriba, y hay un indicio de una flecha que apunta hacia arriba (como los clientes de Lemmonet ventas y crecimiento). También algunas letras son conjuntas cuando otras no lo son. Eso es un guiño a las épocas analógicas y digitales. Representa el etapa de la mayoría de edad. La experiencia, y la adaptación a tecnologías. Por último, pero no menos importante, el acento del final. El punto. Su peca. Es su lado lúdico, su lado creativo, rompe el molde y representa a la humanidad.
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
          Hoy en día, las marcas ya no son estáticas, el dinamismo es parte del ADN de cada startup, aquí mostramos cómo debe usarse la marca en Anuncios de marketing, publicidad y comunicaciones en general.
          </p>
          <figure data-aos='fade-up' data-aos-easing='ease-in-out'>
            <img
              src='/static/images/case-studies/lemmonet/lemmonet-responsive.png'
              alt=''
            />
          </figure>
          <p data-aos='fade-up' data-aos-easing='ease-in-out'>
            Finalmente, una vez que se construyeron todas las partes de la marca, tuvimos una base sólida para construir el diseño del sitio web. Varios wireframes e iteraciones fueron probadas. Terabytes de archivos en Sketch hasta que la pegamos. Un sitio web que transmite todos los valores de La marca, utilizando el nuevo esquema de color y fuentes. Ilustraciones personalizaadas agregando un bonito detalle del que José está realmente orgulloso.
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
