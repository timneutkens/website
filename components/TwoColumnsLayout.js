import React from "react"
import Link from "./Link"

class TwoColumnsLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-out-quad"
        data-aos-once="true"
      >
        <h3>{this.props.title}</h3>
        <p>{this.props.paragraph}</p>
        <style jsx>{`
          section {
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            margin: 10.694vw 0;
          }

          @media all and (min-width: 600px) {
            section {
              grid-template-columns: 1fr 1.6fr;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default TwoColumnsLayout
