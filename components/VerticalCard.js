import React from "react"

function VerticalCard({
  thumbnail,
  thumbnailText,
  position,
  name,
  description
}) {
  return (
    <div className="vertical-card">
      <img src={thumbnail} alt={thumbnailText} />
      <h3>{name}</h3>
      <h4>{position}</h4>
      <p>{description}</p>
      <style jsx>{`
        .vertical-card {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "img img" "name position" "description description";
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
  )
}

export default VerticalCard
