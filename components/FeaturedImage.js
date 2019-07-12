import React, { useEffect } from "react"
import PropTypes from "prop-types"
import ParallaxDown from "./ParallaxDown"
import ParallaxUp from "./ParallaxUp"

function FeaturedImage({
  largeCaption,
  linkTo,
  alt,
  backgroundimg,
  foregroundimg,
  backMaxWidth,
  foreMaxWidth
}) {
  const largeSrcsetJPG = `${largeCaption}.jpg`

  return (
    <a href={linkTo} className="test" aria-label={alt}>
      <div className="container">
        <figure
          className="background"
          data-aos="fade-up"
          data-aos-offset="-150"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <ParallaxDown>
            <img src={backgroundimg} alt={alt} />
          </ParallaxDown>
        </figure>
        <figure
          className="foreground"
          data-aos="fade-up"
          data-aos-offset="-150"
          data-aos-delay="200"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          <ParallaxUp>
            <img src={foregroundimg} alt={alt} />
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
          width: ${backMaxWidth ? backMaxWidth : "100%"};
        }

        .foreground {
          right: 0;
          width: ${foreMaxWidth ? foreMaxWidth : "100%"};
        }

        a:hover h3,
        a:hover p {
          opacity: 0.8;
        }

        img {
          object-fit: contain;
          width: 100%;
        }
        @media all and (max-width: 600px) {
          .container {
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

export default FeaturedImage
