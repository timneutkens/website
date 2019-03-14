import React from 'react';
import AOS from 'aos';
import GaWrapper from '../components/GaWrapper';
import Layout from '../components/Layout';
import TwoColumnsLayout from '../components/TwoColumnsLayout';
import Team from '../components/Team';
import Header from '../components/Header';
import Contact from '../components/Contact';
import ThreeColumnsLayout from '../components/ThreeColumnsLayout';

class About extends React.Component {
  componentDidMount() {
    AOS.init({
      once: true
    });
  }
  render() {
    return (
      <Layout>
        <Header characters="13ch" title="Nuestro trabajo es serio, nosotros no." />
        <figure
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-out-quad"
          className="elgif"
        >
          <img src="/static/images/pixel.gif" alt="" />
        </figure>

        <TwoColumnsLayout
          title="Sobre nosotros"
          paragraph="Nos involucramos con su producto como si fuera nuestro. La pasión que invertimos en las cosas que amamos está más allá de toda medida. Y si su marca es elegida como cliente, puede apostar que la elegimos porque nos encanta. Quedará impresionado por la cantidad de ideas que podemos lanzar contra la pared en una hora. Nuestro flujo de trabajo no es estándar, y tampoco lo somos nosotros, o las marcas que ayudamos a crear."
        />

        <Team />

        <TwoColumnsLayout
          title="En que creemos"
          paragraph="Creemos en el poder de las grandes ideas. Creemos en hacer que a personas reales (que están ocupados, distraídos y nunca interesados en los anuncios) se entusiasmen con las marcas, productos y servicios. Todos los días intentamos ser un poco más inteligentes que ayer. Si estas buscando una agencia vaga y arrogante, Thank u, Next! Nosotros nos emocionamos con cosas pasadas de moda como 'trabajo duro', 'amabilidad' y 'colaboración'. No tratamos de sacarnos el trabajo de encima, amamos lo que hacemos y queremos hacerlo todo el día, todos los días, así que ¿por qué no debemos dar lo mejor que podamos, cada vez?"
        />

        <ThreeColumnsLayout />

        <Contact />

        <style jsx>{`
          figure {
            margin: 0;
          }

          .elgif {
            min-height: 500px;
          }

          .elgif img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 0;
            position: absolute;
            z-index: 3;
          }

          .elgif:before,
          .elgif:after {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .elgif:before {
            background: url('/static/images/patterns/microperforations.svg');
            border-left: 3px solid var(--color-primary);
            border-bottom: 5px solid var(--color-primary);
            z-index: 2;
            top: 11px;
            right: 11px;
          }

          .elgif:after {
            background: url('/static/images/patterns/slash.svg');
            z-index: 1;
            top: 25px;
            right: 23px;
          }
          img {
            width: 90%;
          }
          header {
            max-width: 1ch;
          }

          @media (min-width: 800px) {
            .elgif {
              min-height: 800px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default GaWrapper(About);
