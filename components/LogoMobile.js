import React from 'react'

class LogoMobile extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='29' height='31'>
        <g fill='#FFF' fillRule='evenodd'>
          <path d='M15.937 20.027c0-3.503-1.844-5.753-4.785-5.753-3.337 0-5.137 2.769-5.137 5.148v1.34c0 2.553 1.888 5.191 5.093 5.191 2.853 0 4.83-2.335 4.83-5.926m6.102-.26c0 6.576-3.732 11.16-9.571 11.16-3.25 0-5.313-1.34-6.498-3.33l-.132 3.115H0V0h6.015v12.5c1.273-1.859 3.468-3.2 6.673-3.2 5.444 0 9.352 3.763 9.352 10.468m2.32 6.518H29v4.571h-4.64z' />
        </g>
      </svg>
    )
  }
}

export default LogoMobile
