import React from "react"
import Nav from "./Nav"
import ScrollDownButton from "./ScrollDownButton"

function Header({ shouldScroll, title, centered, characters }) {
  return (
    <header>
      <h1
        data-aos="fade-right"
        data-aos-offset="-150"
        data-aos-delay={shouldScroll ? 800 : 100}
        data-aos-duration="1000"
        data-aos-easing="cubic-bezier(.05, .69, .14, 1)"
      >
        {title}
      </h1>
      {shouldScroll && <ScrollDownButton />}
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          height: calc(100vh - 20vw);
        }

        h1 {
          margin: ${centered ? 0 : "initial"};
          max-width: ${characters};
        }

        @media all and (min-width: 600px) {
          header {
            height: ${shouldScroll ? `calc(100vh - 50px)` : `50vh`};
          }
          h1 {
            margin-top: 0;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
