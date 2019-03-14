import React from 'react'
import PropTypes from 'prop-types'
import ParallaxDown from './ParallaxDown'
import ParallaxUp from './ParallaxUp'

class FeaturedImage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const largeSrcsetJPG = `${this.props.largeCaption}.jpg`

    return (
      <a href={this.props.linkTo} className='test' aria-label={this.props.alt}>
        <div className='container'>
          <figure
            className='background'
            data-aos='fade-up'
            data-aos-offset='50'
            data-aos-delay='100'
            data-aos-duration='500'
            data-aos-easing='ease-in-out'
          >
            <ParallaxDown>
              <img src={this.props.backgroundimg} alt={this.props.alt} />
            </ParallaxDown>
          </figure>
          <figure
            className='foreground'
            data-aos='fade-up'
            data-aos-offset='50'
            data-aos-delay='200'
            data-aos-duration='600'
            data-aos-easing='ease-in-out'
          >
            <ParallaxUp>
              <img src={this.props.foregroundimg} alt={this.props.alt} />
            </ParallaxUp>
          </figure>
        </div>
        <style jsx>{`
          a {
            display: block;
            text-decoration: none;
            overflow: hidden;
          }

          .container {
            position: relative;
            padding-top: 100px;
            display: flex;
            align-items: center;
            min-height: 40vw;
            max-height: 50vw;
          }

          .background,
          .foreground {
            position: absolute;
            margin: 0;
            transform: translateZ 0;
          }

          .background {
            left: 0;
            width: ${this.props.backMaxWidth
        ? this.props.backMaxWidth
        : '100%'};
          }

          .foreground {
            right: 0;
            width: ${this.props.foreMaxWidth
        ? this.props.foreMaxWidth
        : '100%'};
          }

          a:hover h3,
          a:hover p {
            opacity: 0.8;
          }

          img {
            object-fit: contain;
            width: 100%;
          }
          @media all and (max-width: 600px){
            .container{
              min-height: 120vw;
            }
          }
          @media all and (min-width: 600px) {
            a {
              grid-template-columns: 1fr 1fr;
            }
            .background {
              left: 0;
              margin: initial;
              margin-left: 0;
            }

            .foreground {
              right: 0;
              margin: initial;
              margin-left: 0;
            }
          }
        `}</style>
      </a>
    )
  }
}

FeaturedImage.defaultProps = {
  smallCaption: '',
  mediumCaption: '',
  largeCaption: ''
}

FeaturedImage.propTypes = {
  smallCaption: PropTypes.string,
  mediumCaption: PropTypes.string,
  largeCaption: PropTypes.string
}

export default FeaturedImage
