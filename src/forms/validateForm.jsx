import React from "react";
import { ValidatorComponent, ValidatorForm } from "react-form-validator-core";
const Form = ValidatorForm;

class Input extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;

    return (
      <div>
        <input
          {...rest}
          ref={(r) => {
            this.input = r;
          }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return <div style={{ color: "red" }}>{this.getErrorMessage()}</div>;
  }
}

export { Input, Form };
