import React from "react"
import Nav from "./Nav"
import ScrollDownButton from "./ScrollDownButton"

function Header({ shouldScroll, title, centered, characters, intro }) {
  return (
    <header>
      <h1
        data-aos="fade-right"
        data-aos-offset="0"
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
          height: auto;
          margin-top: 5em;
        }

        h1 {
          max-width: ${characters};
          ${intro && "margin: 0;"};
        }

        @media all and (min-width: 600px) {
          header {
            height: ${shouldScroll ? `calc(85vh)` : `auto`};
          }
        }
      `}</style>
    </header>
  )
}

export default Header
