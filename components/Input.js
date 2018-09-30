import { withFormsy } from 'formsy-react';
import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.getErrorMessage();

    return (
      <span className={this.props.getValue() ? 'input input--filled' : 'input'}>
        {this.props.type === 'textarea' ? (
          <textarea
            className="input__field textarea"
            name={this.props.name}
            onChange={this.changeValue}
            type={this.props.type}
            value={this.props.getValue() || ''}
          />
        ) : (
          <input
            className="input__field"
            name={this.props.name}
            onChange={this.changeValue}
            type={this.props.type}
            value={this.props.getValue() || ''}
          />
        )}

        <label className="input__label" htmlFor={this.props.name}>
          <span
            className="input__label-content"
            data-content={this.props.label}
          >
            {this.props.label}
          </span>
        </label>
        {errorMessage && <span className="input__error">{errorMessage}</span>}
        <style jsx>{`
          .input {
            position: relative;
            z-index: 1;
            display: inline-block;
            margin: 0 0 3.5em 0;
            max-width: 100%;
            width: calc(100% - 2em);
            vertical-align: top;
          }

          .input__field {
            position: relative;
            display: block;
            float: right;
            padding: 2em;
            width: 100%;
            border: none;
            border-radius: 0;
            background: #f0f0f0;
            color: #fff;
            font-weight: 300;
            font-family: var(--font-secondary);
            -webkit-appearance: none;
          }

          .input__field.textarea {
            min-height: 11.9em;
            resize: none;
            font-weight: 300;
            font-family: var(--font-secondary);
          }

          .input--filled .input__field,
          .input__field:focus {
            outline: none;
            border-color: #fff;
            border: 2px solid;
            font-weight: 300;
            font-family: var(--font-secondary);
          }

          .input__label {
            display: inline-block;
            float: right;
            padding: 0 1em;
            width: 40%;
            color: #696969;
            font-weight: bold;
            font-size: 70.25%;
            user-select: none;
            font-weight: 300;
          }

          .input__label-content {
            position: relative;
            display: block;
            padding: 1.6em 0;
            width: 100%;
            font-weight: 300;
            font-family: var(--font-secondary);
          }

          .input__field {
            width: 100%;
            background-color: var(--color-primary);
            border: 2px solid;
            border-color: #313131;
            transition: background-color 0.25s, border-color 0.25s;
          }

          .input__label {
            width: 100%;
            text-align: left;
            position: absolute;
            bottom: 100%;
            pointer-events: none;
            overflow: hidden;
            padding: 0 1.25em;
            transform: translate3d(0, 3em, 0);
            transition: transform 0.25s;
            transition-timing-function: ease-in-out;
          }

          .input__label-content {
            color: #fff;
            padding: 0.25em 0;
            transition: transform 0.25s;
            transition-timing-function: ease-in-out;
            font-size: calc(12px + (14 - 12) * (100vw - 400px) / (1440 - 400));
            font-weight: 300;
            font-family: var(--font-secondary);
          }

          .input__error {
            font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1440 - 400));
            position: absolute;
            left: 0;
            bottom: -1.5em;
          }

          .input__label-content::after {
            content: attr(data-content);
            position: absolute;
            font-weight: 300;
            bottom: 100%;
            left: 0;
            height: 100%;
            width: 100%;
            color: #fff;
            padding: 0.25em 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: calc(12px + (14 - 12) * (100vw - 400px) / (1440 - 400));
          }

          .input__field:focus + .input__label,
          .input--filled .input__label {
            transform: translate3d(0, 0, 0);
          }

          .input__field:focus + .input__label .input__label-content,
          .input--filled .input__label-content {
            transform: translate3d(0, 100%, 0);
          }

          .input__field:focus + .input__field,
          .input--filled .input__field {
            background-color: transparent;
          }
        `}</style>
      </span>
    );
  }
}

export default withFormsy(Input);
