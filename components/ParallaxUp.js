import React from 'react'
import Plx from 'react-plx'

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 'self',
    startOffset: 0,
    duration: 1000,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 100,
        endValue: -50,
        property: 'translateY'
      }
    ]
  }
]

class ParallaxUp extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <Plx parallaxData={parallaxData}>{this.props.children}</Plx>
  }
}

export default ParallaxUp
