import React from 'react';
import Container from '../components/Container';
import marked from 'marked';

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

export default function Post(options) {
  return class PostPage extends React.Component {
    render() {
      return (
        <Container>
          <h1>{options.title}</h1>
          <article>{marked(options.content)}</article>
        </Container>
      );
    }
  };
}
