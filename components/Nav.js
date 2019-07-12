import React from "react"
import Logo from "./Logo"
import LogoMobile from "./LogoMobile"
import Link from "./Link"

class Nav extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      vpWidth: 1000,
      docScroll: 0
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
    this.trackScroll()
  }

  updateWindowDimensions() {
    this.setState({ vpWidth: window.innerWidth })
  }

  componentWillUnmount() {
    this.state.vpWidth
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  getPageYScroll() {
    this.setState({
      docScroll: window.pageYOffset || document.documentElement.scrollTop
    })
  }

  trackScroll() {
    window.addEventListener("scroll", this.getPageYScroll.bind(this))
  }

  render() {
    const logoAnimation = this.props.animate
      ? {
          "data-aos": "fade-down",
          "data-aos-offset": "-150",
          "data-aos-delay": "200",
          "data-aos-duration": "1000",
          "data-aos-easing": "cubic-bezier(.05, .69, .14, 1)"
        }
      : {}

    const navAnimation = this.props.animate
      ? {
          "data-aos": "fade-down",
          "data-aos-offset": "-150",
          "data-aos-delay": "500",
          "data-aos-duration": "1000",
          "data-aos-easing": "cubic-bezier(.05, .69, .14, 1)"
        }
      : {}

    const { docScroll } = this.state

    return (
      <nav>
        <figure className="home" {...logoAnimation}>
          <Link href="/">
            <a className="logo" aria-label="basement">
              {this.state.vpWidth < 800 ? <LogoMobile /> : <Logo />}
            </a>
          </Link>
        </figure>
        <ul {...navAnimation}>
          <li>
            <Link activeClassName="active" href="/about" prefetch>
              <a className="navigation-item">About</a>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/work" prefetch>
              <a className="navigation-item">Work</a>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/contact" prefetch>
              <a className="navigation-item">Contact</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          ul {
            list-style-type: none;
          }

          ul li {
            display: inline;
          }

          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100vw;
            padding: ${docScroll > 0 ? "1vw 7vw 1vw 7vw" : "4vw 7vw 2vw 7vw"};
            position: fixed;
            left: 50%;
            transform: translate(-50%);
            background-color: var(--color-primary);
            z-index: 1000;
            transition: padding 600ms ease;
          }

          .home {
            width: 30%;
            max-width: 20vh;
            margin: 0;
          }

          .navigation-item {
            text-decoration: none;
            margin: 1em;
            padding: 0.5em;
            font-size: 0.8rem;
            line-height: 1rem;
            color: var(--color-tertiary);
            transition: all 200ms ease-in-out;
          }

          .navigation-item.active,
          .navigation-item:active,
          .navigation-item:focus,
          .navigation-item:hover {
            color: var(--color-primary);
            box-shadow: inset 0 -2.1rem 0 0 var(--color-secondary);
          }

          .navigation-item:focus {
            outline: none;
            color: var(--color-primary);
          }

          @media (min-width: 800px) {
            .navigation-item {
              font-size: 1rem;
            }
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav
