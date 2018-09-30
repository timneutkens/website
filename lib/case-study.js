import React from 'react';
import Container from '../components/Container';

export default function CaseStudy(options) {
  return class PostPage extends React.Component {
    render() {
      return (
        <Container>
          <h1>{options.title}</h1>
          <article>{options.content}</article>
        </Container>
      );
    }
  };
}
