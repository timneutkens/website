import React from 'react';
import { Formik } from 'formik';
import Input from './Input';

export default class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { honeypot: null };
    this.pleaseDont = React.createRef();
  }

  componentDidMount() {
    this.setState({ honeypot: document.getElementsByClassName('please-dont') });
  }

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email =
                'El email es requerido, como te contactamos sino maestro?';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email =
                'Ese email esta turbio, estas usando un "@" y un punto con mas texto despues?';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            if (!this.state.honeypot.checked) {
              fetch(this.props.url, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(values),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(() => {
                setSubmitting(false);
                resetForm();
                alert(
                  'Gracias! te vamos a contactar pronto (JA! esta es la mejor manera de mostrar un alert)'
                );
              });
            } else {
              alert('MALO BOT MALO!');
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} className="gform">
              <span className="input">
                <input
                  type="text"
                  name="name"
                  className="input__field name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name || ''}
                />
                <label htmlFor="email">Tu nombre</label>
              </span>
              <span className="input">
                <input
                  type="email"
                  name="email"
                  className="input__field email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email || ''}
                />
                <label htmlFor="email">Tu email</label>
              </span>
              <span className="input">
                <textarea
                  name="message"
                  className="input__field textarea"
                  cols="30"
                  rows="5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message || ''}
                />
                <label htmlFor="email">Que onda?</label>
              </span>
              <input
                className="please-dont"
                type="checkbox"
                value="1"
                tabIndex="-1"
                autoComplete="nope"
              />
              <div className={errors.email ? 'error' : 'error hidden'}>
                {errors.email}
              </div>
              <button
                type="submit"
                disabled={!values.email || errors.email}
                className="button"
              >
                Mandar!
              </button>
            </form>
          )}
        </Formik>
        <style jsx global>{`
          .input {
            position: relative;
            z-index: 1;
            display: inline-block;
            margin: 0 0 3.5em 0;
            max-width: 100%;
            width: calc(100% - 2em);
            vertical-align: top;
          }

          label {
            pointer-events: none;
            position: absolute;
            top: 1.8em;
            left: 1.2em;
            transition: all 350ms ease;
          }

          .input__field {
            position: relative;
            display: block;
            padding: 2em;
            width: 100%;
            border-radius: 0;
            background: transparent;
            color: #fff;
            font-weight: 300;
            font-family: var(--font-secondary);
            font-size: 0.9rem;
            background-color: var(--color-primary);
            border: 2px solid #313131;
            transition: all 0.25s;
          }

          .input__field.textarea {
            resize: none;
            overflow: auto;
          }

          .input__field:not([value='']):not(.textarea) + label,
          .textarea:not(:empty) + label,
          .input__field:focus + label {
            transform: translateY(-100%);
            font-size: 80%;
            opacity: 0.6;
          }

          .button {
            cursor: pointer;
          }

          .button--disabled,
          .button[disabled] {
            pointer-events: none;
            cursor: not-allowed;
            display: inline-block;
            text-decoration: none;
            text-transform: uppercase;
            border: 1px solid #000;
            box-shadow: -5px 5px 0 0 #313131;
            background: #313131;
            color: var(--color-secondary);
            transition: all 200ms ease;
          }

          .error {
            margin: 0 10px;
            transform: scaleY(1);
            transform-origin: top center;
            transition: transform 400ms ease-in;
          }

          .error.hidden {
            transform: scaleY(0);
          }

          .error:not(.hidden) + .button {
            margin-top: 2em;
            transition: all 300ms ease-in;
            transform: translateY(1em);
          }

          .please-dont {
            opacity: 0;
            transform: translate(-500000px);
          }
        `}</style>
      </React.Fragment>
    );
  }
}
