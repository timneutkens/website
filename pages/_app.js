// pages/_app.js
import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

class Basement extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Nuestro trabajo es serio, nosotros no | basement.studio</title>
        </Head>

        <Component {...pageProps} />
      </Container>
    )
  }
}

export default Basement
