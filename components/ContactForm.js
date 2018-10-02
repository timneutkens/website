import Formsy from 'formsy-react';
import React from 'react';
import Input from '../components/Input';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { canSubmit: false, honeypot: null };
    this.pleaseDont = React.createRef();
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  componentDidMount() {
    this.setState({ honeypot: document.getElementById('please-dont') });
  }

  submit(model, resetForm) {
    if (!this.state.honeypot.checked) {
      fetch('/api/contact', {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(model)
      }).then(res => {
        if (res.status === 200) {
          alert("Thanks, we'll be in touch soon.");
          resetForm();
        } else {
          console.log('not sent!', res);
        }
      });
    }
  }

  render() {
    return (
      <Formsy
        ref="form"
        className="form__wrapper"
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <Input
          type="text"
          className="name"
          label="Your name"
          name="name"
          required
          validations="isWords"
        />
        <Input
          type="text"
          className="email"
          label="Your email"
          name="email"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
        <Input
          type="textarea"
          className="message"
          label="Message"
          name="message"
          validations="isWords"
          validationError="We know you have something to say!"
          required
        />
        <input
          refs={this.pleaseDont}
          type="checkbox"
          id="please-dont"
          value="1"
          style={{ display: 'none !important' }}
          tabIndex="-1"
          autoComplete="off"
        />
        <button
          className={
            this.state.canSubmit ? 'submit' : 'submit submit--disabled'
          }
          type="submit"
          disabled={!this.state.canSubmit}
        >
          CONTACT US{' '}
        </button>
        <style jsx global>{`
          .form__wrapper {
            margin: auto;
            margin-bottom: 3em;
          }

          .name,
          .email,
          .message,
          .submit {
            margin: 30px 0;
          }

          .submit {
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

          .submit:hover {
            box-shadow: 10px -10px 0 0 var(--color-secondary);
            transform: translate(-5px, 5px);
          }

          .submit--disabled,
          .submit[disabled] {
            pointer-events: none;
            cursor: not-allowed;
            display: inline-block;
            font-size: calc(18px + (16 - 18) * (100vw - 400px) / (1440 - 400));
            text-decoration: none;
            text-transform: uppercase;
            padding: 1.5em 2em;
            border: 1px solid #000;
            box-shadow: -5px 5px 0 0 #313131;
            background: #313131;
            color: var(--color-secondary);
            transition: all 200ms ease;
          }

          .submit {
            margin: 0;
          }

          @media all and (min-width: 800px) {
            .form__wrapper {
              margin: 0;
              margin-bottom: 10em;
            }
          }
        `}</style>
      </Formsy>
    );
  }
}

export default ContactForm;
