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

export default class Test extends React.Component {
  state = { email: "" };
  handleChange = (event) => {
    const email = event.target.value;
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <Form ref="form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            onChange={this.handleChange}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <button type="submit">submit</button>
        </Form>
      </div>
    );
  }
}
