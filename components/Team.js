import React from 'react'
import JoinUs from './JoinUs'
import TeamMember from './TeamMember'

class Team extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section>
        <TeamMember
          order={0}
          thumbnail='Jose.jpg'
          name='Jose Rago'
          instagram='http://instagram.com/ragojose'
          linkedin='http://www.linkedin.com/in/jose-francisco-rago'
          twitter='http://twitter.com/ragojose'
          position='Co-Fundador & Diseñador de producto'
          description='Como diseñador apasionado y entusiasta de los píxeles perfectos, siempre estoy enfocado en resolver los problemas de experiencia del usuario y mejorar los procesos de diseño para los clientes y los equipos internos. Estoy constantemente con el dedo en el pulso de la última tecnología para crear productos innovadores'
        />
        <TeamMember
          order={5}
          thumbnail='Fran.jpg'
          name='Franco Arza'
          instagram='https://www.instagram.com/francoarz/'
          linkedin='https://www.linkedin.com/in/francoarza/'
          twitter='http://twitter.com/arzafran'
          position='Co-Fundador & Desarrollador fullstack'
          description='Ex estudiante de filosofía, programador a tiempo completo durante cinco años (y contando) y líder web en basement.studio. Me gusta mirar hacia el abismo y hacia el horizonte, porque eso es algo pillo para hacer en una foto de perfil. Siempre intentando cosas nuevas que alguien mencionó en reddit.'
        />
        <JoinUs order={10} thumbnail='join-us.svg' />
        <style jsx>{`
          section {
            margin-bottom: 0;
          }
          @media (min-width: 800px) {
            section {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-column-gap: 60px;
              margin-bottom: 5rem;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Team
