import React from 'react';
import AOS from 'aos';
import GaWrapper from '../components/GaWrapper';
import Layout from '../components/Layout';
import Header from '../components/Header';
import FeaturedCard from '../components/FeaturedCard';
import Contact from '../components/Contact';

class Work extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <Layout>
        <Header
          title="Work hard. Be smart.
Have fun."
          centered
        />
        <FeaturedCard
          backgroundimg="/static/images/device1.png"
          foregroundimg="/static/images/device2.png"
          foreMaxWidth="30%"
          paddingTop="6em"
          callToAction="LEER MAS"
          link="lo-que-hicimos-para/gamedex"
          subhead="NEXTjs WEBSITE"
          title="Ellos eran cool, nosotros los hicimos malotes."
          description="La tecnologia del Blockchain revoluciona la industria de los coleccionables haciendo imposible la falsificacion y copiado de articulos. Transferencias instantaneas y tarjetas de edicion limitada cuya rareza es probable. La proxima generacion de criaturas de fantasia, mascotas digitales, y tarjetas de deportes esta llegando."
          alt="Gamedex"
        />
        <FeaturedCard
          backgroundimg="/static/images/device4.png"
          foregroundimg="/static/images/device3.png"
          foreMaxWidth="80%"
          backMaxWidth="60%"
          callToAction="SABER MAS"
          inverted
          link="lo-que-hicimos-para/toda"
          subhead="BRANDING & WEBSITE"
          title="Como hacer un protocolo de internet parecer sexy"
          description="TODA Network es la próxima evolución de TCP/IP para la transferencia de valor a través de la capa de comunicación y debajo del sistema operativo. Ellos nos contactaron para rediseñar su sitio web con el fin de obtener toda los atención de la comunidad blockchain."
          alt="TODA"
        />
        <FeaturedCard
          backgroundimg="/static/images/device6.png"
          foregroundimg="/static/images/device7.png"
          foreMaxWidth="18%"
          callToAction="A VER!"
          link="lo-que-hicimos-para/imusify"
          subhead="NEXTjs WEBSITE"
          title="Saca gente del medio"
          description="imusify se puso en contacto con basement.studio para crear un sitio web interactivo para promocionar y encontrar inversores en su oferta inicial de moneda y también mejorar la interfaz y experiencia de usuario en su revolucionaria plataforma criptográfica para escuchar y compartir música."
          alt="imusify"
        />
        <FeaturedCard
          backgroundimg="/static/images/device8.png"
          foregroundimg="/static/images/device9.png"
          foreMaxWidth="65%"
          backMaxWidth="80%"
          inverted
          link="lo-que-hicimos-para/lemmonet"
          subhead="BRANDING & WEBSITE"
          callToAction="LEER MAS"
          title="No solo una cara bonita"
          description="Lemmonet se puso en contacto con nosotros para actualizar su marca y crear un ecosistema para generar identidad entre sus productos. Buscamos comunicar un sentido de tecnología, y destacar su madurez característica ganada después de más de 10 años de experiencia."
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
    );
  }
}

export default GaWrapper(Work);
