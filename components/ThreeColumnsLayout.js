import React from 'react';
import Milestone from './Milestone';

class ThreeColumnsLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Milestone
          order={0}
          counter="4m"
          description="Lineas de codigo subidas."
          suffix="Medir el progreso de un programa por lineas de codigo es como medir el progreso de construccion de una aeronave por su peso, gracias Bill. (PD: no contamos, es un aproximado)"
        />
        <Milestone
          order={5}
          counter="1"
          description="Arcade en progreso."
          suffix="Nos gusta verlo como un trabajo en progreso eterno, pero se puede decir que esta terminado. Checkea nuestro Instagram para ver como quedo :)"
        />
        <Milestone
          order={10}
          counter="14+"
          description="Tazas de cafe por dia."
          suffix="(pero estamos tratando de dejarlo, lol, no)"
        />
        <style jsx>{`
          @media (min-width: 1300px) {
            section {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-column-gap: 60px;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default ThreeColumnsLayout;
