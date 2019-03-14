import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || null

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${
      props.activeClassName
    }`.trim()
  }

  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

ActiveLink.defaultProps = {
  router: {},
  children: <React.Fragment />,
  activeClassName: '',
  href: ''
}

ActiveLink.propTypes = {
  router: PropTypes.object,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
  href: PropTypes.string
}

export default withRouter(ActiveLink)
