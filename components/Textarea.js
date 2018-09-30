import { withFormsy } from 'formsy-react';
import React from 'react';

class Textarea extends React.Component {
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
      <label className="input__label" htmlFor={this.props.name}>
        {this.props.label}
        <textarea
          className={
            this.props.getValue() ? 'input__field has-value' : 'input__field'
          }
          name={this.props.name}
          onChange={this.changeValue}
          type={this.props.type}
          value={this.props.getValue() || ''}
        />
        <span className="input__error">{errorMessage}</span>
        <style jsx>{``}</style>
      </label>
    );
  }
}

export default withFormsy(Textarea);
