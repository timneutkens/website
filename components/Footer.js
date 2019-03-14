import React from 'react'
import Link from './Link'
import LogoGlitched from './LogoGlitched'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <i className='logo'>
          <LogoGlitched />
        </i>
        <p className='suffix'>
          Suficiente sobre nosotros,{' '}
          <a className='link' href='/contacto'>
            contanos de vos.
          </a>
          . Estamos en el sotano.
        </p>
        <ul className='navigation'>
          <li>
            <Link activeClassName='active' href='/sobre-nosotros' prefetch>
              <a className='link'>Sobre nosotros</a>
            </Link>
          </li>
          <li>
            <Link activeClassName='active' href='/trabajos' prefetch>
              <a className='link'>Trabajos</a>
            </Link>
          </li>
          <li>
            <Link activeClassName='active' href='/contacto' prefetch>
              <a className='link'>Contacto</a>
            </Link>
          </li>
        </ul>
        <ul className='social'>
          <li>
            <a className='link' href='https://instagram.com/basementdotstudio'>
              Instagram
            </a>
          </li>
          <li>
            <a className='link' href='https://twitter.com/basementdot'>
              Twitter
            </a>
          </li>
          <li>
            <a
              className='link'
              href='https://www.linkedin.com/company/basementstudio/'
            >
              Linkedin
            </a>
          </li>
          <li>
            <a className='link' href='https://angel.co/basemendotstudio'>
              Angellist
            </a>
          </li>
        </ul>
        <p className='copyright'>
          basement.studio LLC {new Date().getFullYear()} todos los derechos reservados.
        </p>
        <style jsx>{`
          footer {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: 'logo' 'suffix' 'navigation' 'social' 'copyright';
            padding: 4.17vw 0;
            color: var(--color-tertiary);
            letter-spacing: -0.5;
          }

          .suffix {
            margin: 0;
            margin-top: 0.8em;
            line-height: 40px;
            max-width: 35ch;
            grid-area: suffix;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          .social {
            grid-area: social;
          }

          .navigation {
            grid-area: navigation;
          }

          li {
            margin: 1em 0;
            padding-bottom: 10px;
            color: var(--color-tertiary);
          }

          span {
            padding: 0 1em;
          }

          .logo {
            display: block;
            margin-bottom: 2.7em;
            margin-top: 1em;
            width: 60%;
            grid-area: logo;
          }

          p.copyright {
            grid-area: copyright;
          }

          @media all and (min-width: 600px) {
            footer {
              grid-template-columns: 2fr 1fr 1fr;
              grid-template-areas: 'logo . .' 'suffix navigation social' 'copyright . .';
            }
            p:first-child {
              padding-left: 0;
            }

            .logo {
              display: block;
              margin-bottom: 2.7em;
              margin-top: 1em;
              width: 40%;
              grid-area: logo;
            }

            span:last-child {
              padding-right: 0;
            }
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
