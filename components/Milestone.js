import React from 'react'

class Milestone extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div
        className='wrapper'
        data-aos='fade-up'
        data-aos-offset='50'
        data-aos-delay={`${this.props.order}00`}
        data-aos-duration='1000'
        data-aos-easing='ease-out-quad'
        data-aos-once='true'
      >
        <h5>{this.props.counter}</h5>
        <h3>{this.props.description}</h3>
        {this.props.suffix && <h6>{this.props.suffix}</h6>}

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-direction: column;
            border-top: 1px solid var(--color-tertiary);
            margin-bottom: 7rem;
          }
          h5 {
            padding-top: 0.7em;
            margin: 0;
          }
          h3 {
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Milestone
