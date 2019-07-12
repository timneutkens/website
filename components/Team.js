import React from "react"
import JoinUs from "./JoinUs"
import TeamMember from "./TeamMember"

function Team() {
  return (
    <section>
      <TeamMember
        order={0}
        thumbnail="Jose.jpg"
        name="Jose Rago"
        instagram="http://instagram.com/ragojose"
        linkedin="http://www.linkedin.com/in/jose-francisco-rago"
        twitter="http://twitter.com/ragojose"
        position="Co-Founder & Product Designer"
        description="As a passionate designer and pixel-perfect enthusiast, I'm always focused on solving user experience problems and improving design processes for clients and internal teams. I'm constantly with my finger on the pulse of the latest technology to create innovative products"
      />
      <TeamMember
        order={5}
        thumbnail="Fran.jpg"
        name="Franco Arza"
        instagram="https://www.instagram.com/francoarz/"
        linkedin="https://www.linkedin.com/in/francoarza/"
        twitter="http://twitter.com/arzafran"
        position="Co-Founder & Fullstack Developer"
        description="Former philosophy student, Full time programmer for five years (and counting) and web leader at basement.studio. Likes to gaze into the abyss, and into the horizon, because that's a cool thing to do on a profile picture. Always trying new stuff someone mentioned on reddit"
      />
      <JoinUs order={10} thumbnail="join-us.svg" />
      <style jsx>{`
        section {
          margin-bottom: 0;
        }
        @media (min-width: 800px) {
          section {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 60px;
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Team
