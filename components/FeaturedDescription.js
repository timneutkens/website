import React from 'react';
import PropTypes from 'prop-types';

class FeaturedDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h4>{this.props.subhead}</h4>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <style jsx>{`
          h2 {
            grid-area: title;
            margin: 0;
            padding: 0;
          }

          p {
            grid-area: description;
            max-width: 65ch;
            padding-bottom: 2em;
          }

          h4 {
            grid-area: subhead;
            text-transform: uppercase;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default FeaturedDescription;
