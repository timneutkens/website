import React from 'react'

export default class SmoothScroller extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      scrollPositionY: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY

    this.setState({
      styles: {
        transform: `translate3d(0, -${scrollPositionY}px, 0)`
      }
    })
  }

  render () {
    return (
      <main style={this.state.styles}>
        {this.props.children}
        <style jsx>{`
          main {
            height: 100%;
            will-change: transform;
            transition: transform 1.2s ease-out;
          }
        `}</style>
      </main>
    )
  }
}
