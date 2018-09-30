import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = props => (
  <main>
    <Nav animate={props.animate} />
    {props.children}
    <Footer />
  </main>
);

export default Layout;
