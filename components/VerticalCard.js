import React from 'react';
import PropTypes from 'prop-types';

class VerticalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vertical-card">
        <img src={this.props.thumbnail} alt={this.props.thumbnailText} />
        <h3>{this.props.name}</h3>
        <h4>{this.props.position}</h4>
        <p>{this.props.description}</p>
        <style jsx>{`
          .vertical-card {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'img img' 'name position' 'description description';
            grid-template-rows: 0.8fr 50px 1fr;
          }
          img {
            grid-area: img;
            max-width: 100%;
          }

          h3,
          h4 {
            align-self: start;
          }
          p {
            grid-area: description;
            padding-bottom: 2em;
          }

          h4 {
            grid-area: position;
            text-align: right;
            text-transform: uppercase;
          }

          h3 {
            grid-area: name;
            text-align: left;
          }
        `}</style>
      </div>
    );
  }
}

VerticalCard.defaultProps = {
  alt: '',
  position: '',
  name: '',
  description: ''
};

VerticalCard.propTypes = {
  alt: PropTypes.string,
  positions: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
};

export default VerticalCard;
