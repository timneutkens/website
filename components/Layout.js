import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      windowSize: {
        width: 0,
        height: 0
      },
      docScroll: 0
    }

    this.renderedStyles = {
      translationY: {
        previous: 0,
        current: 0,
        ease: 0.1,
        setValue: () => this.state.docScroll
      }
    }

    this.fixedContainer = React.createRef()
  }

  componentDidMount() {
    this.calcWinSize()
    window.addEventListener("resize", this.calcWinSize.bind(this))
    this.domNode = this.fixedContainer.current
    this.scrollableNode = this.fixedContainer.current.firstChild

    this.trackScroll()
    this.update()
    this.setSize()
    this.style()
    this.initEvents()

    requestAnimationFrame(() => this.animationLoop())
  }

  initEvents() {
    window.addEventListener("resize", () => this.setSize())
  }

  animationLoop() {
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[key].setValue()
      this.renderedStyles[key].previous = this.lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].ease
      )
    }
    this.layout()

    // loop..
    requestAnimationFrame(() => this.animationLoop())
  }

  update() {
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[
        key
      ].previous = this.renderedStyles[key].setValue()
    }
    this.layout()
  }

  layout() {
    this.scrollableNode.style.transform = `translate3d(0,${-1 *
      this.renderedStyles.translationY.previous}px,0)`
  }

  setSize() {
    document.body.style.height = this.scrollableNode.scrollHeight + "px"
  }

  style() {
    this.domNode.style.position = "fixed"
    this.domNode.style.width = this.domNode.style.height = "100%"
    this.domNode.style.top = this.domNode.style.left = "50%"
    this.domNode.style.transform = "translate(-50%, -50%)"
    this.domNode.style.overflow = "hidden"
  }

  calcWinSize() {
    this.setState({
      windowSize: { width: window.innerWidth, height: window.innerHeight }
    })
  }

  getPageYScroll() {
    this.setState({
      docScroll: window.pageYOffset || document.documentElement.scrollTop
    })
  }

  trackScroll() {
    window.addEventListener("scroll", this.getPageYScroll.bind(this))
  }

  map(x, a, b, c, d) {
    return ((x - a) * (d - c)) / (b - a) + c
  }

  lerp(a, b, n) {
    return (1 - n) * a + n * b
  }

  render() {
    return (
      <>
        <Nav animate={this.props.animate} />
        <main ref={this.fixedContainer}>
          <div>
            {this.props.children}
            <Footer />
          </div>
        </main>
      </>
    )
  }
}

export default Layout
