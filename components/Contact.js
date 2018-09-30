import React from 'react';
import Link from 'next/link';

const Contact = () => (
  <section>
    <div className="content">
      <h3>Have a project in mind?</h3>
      <Link href="/contact">
        <a className="button">
          Tell us about it{' '}
          <svg width="20" height="16" version="1">
            <path
              fill="#FFF"
              fillRule="nonzero"
              stroke="#000"
              d="M16 7l-5-5 1-1 8 7-8 7-1-1 5-5H1V7h15z"
            />
          </svg>
        </a>
      </Link>
    </div>
    <style jsx>{`
      section {
        position: relative;
        min-height: 300px;
        margin-bottom: 4em;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        padding: 1em;
        width: 100%;
        height: 100%;
        z-index: 3;
        border: 1px solid var(--color-secondary);
        background-color: var(--color-primary);
      }

      section:before,
      section:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
      }

      section:before {
        background: url('/static/images/patterns/microperforations.svg');
        border-left: 3px solid var(--color-primary);
        border-bottom: 5px solid var(--color-primary);
        z-index: 2;
        top: 11px;
        right: 11px;
      }

      section:after {
        background: url('/static/images/patterns/slash.svg');
        z-index: 1;
        top: 25px;
        right: 23px;
      }

      h3 {
        text-align: center;
      }

      .button {
        display: inline-block;
        font-size: calc(18px + (16 - 18) * (100vw - 400px) / (1440 - 400));
        text-decoration: none;
        text-transform: uppercase;
        padding: 1.5em 2em;
        border: 1px solid rgb(256, 256, 256);
        box-shadow: -5px 5px 0 0 var(--color-secondary);
        background: var(--color-primary);
        color: var(--color-secondary);
        transition: all 200ms ease;
      }

      .button:hover {
        box-shadow: 10px -10px 0 0 var(--color-secondary);
        transform: translate(-5px, 5px);
      }

      @media (min-width: 600px) {
        section {
          margin-top: 7em;
          min-height: 13rem;
        }
        .content {
          flex-direction: row;
          justify-content: space-between;
          padding: 2.5em 5em;
        }
        h3 {
          display: inline-block;
          text-align: left;
        }
      }
    `}</style>
  </section>
);

export default Contact;
