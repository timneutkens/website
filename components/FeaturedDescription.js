import React from "react"

function FeaturedDescription({ subhead, title, description }) {
  return (
    <React.Fragment>
      <h4>{subhead}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
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
  )
}

export default FeaturedDescription
