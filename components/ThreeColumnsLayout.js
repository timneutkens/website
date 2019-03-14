import React from 'react'
import Milestone from './Milestone'

class ThreeColumnsLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section>
        <Milestone
          order={0}
          counter='4m'
          description='Lines of code pushed.'
          suffix="Measuring programming progress by lines of code is like measuring aircraft building progress by weight, thanks Bill. (Ps. we don't count, it's an approximate)"
        />
        <Milestone
          order={5}
          counter='1'
          description='Arcade in progress.'
          suffix='We like to think of it as an eternal WIP, but you can call it done. Check our instagram to see the progress :)'
        />
        <Milestone
          order={10}
          counter='14+'
          description='Cups of coffee a day.'
          suffix="(but we're trying to quit, lol, not)"
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
    )
  }
}

export default ThreeColumnsLayout
