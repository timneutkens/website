import React from "react";
import FeaturedImage from "../components/FeaturedImage";
import FeaturedDescription from "../components/FeaturedDescription";
import Link from "next/link";

const FeaturedCard = props => (
  <div
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="200"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    className={
      props.inverted ? "featured__wrapper inverted" : "featured__wrapper"
    }
  >
    <div className="image">
      <FeaturedImage
        linkTo="#"
        backgroundimg={props.backgroundimg}
        foregroundimg={props.foregroundimg}
        foreMaxWidth={props.foreMaxWidth}
        backMaxWidth={props.backMaxWidth}
        alt={props.alt}
      />
    </div>
    <div className="description">
      <FeaturedDescription
        subhead={props.subhead}
        title={props.title}
        description={props.description}
      />
      <Link href={props.link}>
        <a className="button">
          {props.callToAction}{" "}
          <svg width="20" height="16" version="1">
            <path
              fill="#FFF"
              fillRule="nonzero"
              stroke="#000"
              d="M16 7l-5-5 1-1 8 7-8 7-1-1 5-5H1V7h15z"
            />
          </svg>
        </a>
      </Link>
    </div>
    <style jsx>{`
      section {
        margin-bottom: 4.38em;
      }

      .featured__wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: "image" "description";
        align-items: center;
        grid-column-gap: 8em;
        width: 100%;
        margin-bottom: 4em;
      }

      .image {
        grid-area: image;
      }

      .description {
        grid-area: description;
      }

      .button {
        display: inline-block;
        font-size: calc(18px + (16 - 18) * (100vw - 400px) / (1440 - 400));
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        padding: 1.5em 5em;
        border: 1px solid rgb(256, 256, 256);
        box-shadow: -5px 5px 0 0 var(--color-secondary);
        background: var(--color-primary);
        color: var(--color-secondary);
        transition: all 200ms ease;
        width: 100%;
      }

      .button:hover {
        box-shadow: 10px -10px 0 0 var(--color-secondary);
        transform: translate(-5px, 5px);
      }

      @media (min-width: 600px) {
        .featured__wrapper {
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "image description";
          margin-bottom: 4rem;
        }

        .featured__wrapper:first-of-type {
          padding-top: ${props.paddingTop ? props.paddingTop : 0};
        }
        .featured__wrapper.inverted {
          grid-template-areas: "description image";
        }

        .button {
          width: auto;
        }
      }
    `}</style>
  </div>
);

export default FeaturedCard;
