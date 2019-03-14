import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

class Layout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <Nav animate={this.props.animate} />
        {this.props.children}
        <Footer />
      </main>
    )
  }
}

export default Layout
