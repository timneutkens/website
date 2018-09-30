import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Router from 'next/router';

const debug = process.env.NODE_ENV !== 'production';

export default WrappedComponent =>
  class GaWrapper extends Component {
    constructor(props) {
      super(props);
      this.trackPageview = this.trackPageview.bind(this);
    }

    componentDidMount() {
      this.initGa();
      this.trackPageview();
      Router.router.events.on('routeChangeComplete', this.trackPageview);
    }

    componentWillUnmount() {
      Router.router.events.off('routeChangeComplete', this.trackPageview);
    }

    trackPageview(path = document.location.pathname) {
      if (path !== this.lastTrackedPath) {
        ReactGA.pageview(path);
        this.lastTrackedPath = path;
      }
    }

    /* eslint-disable */
    initGa() {
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize('UA-118135632-1', { debug });
        window.GA_INITIALIZED = true;
      }
    }
    /* eslint-enable */

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
