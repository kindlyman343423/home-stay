import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../../shared/FormField";
import FormError from "../../shared/FormError";

const RegisterForm = props => {
  const {
    handleSubmit,
    pristine,
    submitting,
    registerUser,
    valid,
    errors
  } = props;
  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <Field
        name="username"
        type="text"
        placeholder="Username"
        className="form-control"
        component={renderField}
        label="Username"
      />

      <Field
        name="email"
        type="email"
        placeholder="Email"
        className="form-control"
        component={renderField}
        label="Email"
      />

      <Field
        name="password"
        type="password"
        placeholder="Password"
        className="form-control"
        component={renderField}
        label="Password"
      />

      <Field
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        className="form-control"
        component={renderField}
        label="Confirm Password"
      />

        <button
          className="btn btn-bwm btn-form"
          type="submit"
          disabled={!valid || pristine || submitting}
        >
          Submit
        </button>
      {errors.length > 0 && <FormError errors={errors}/>}
    </form>
  );
};
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 4) {
    errors.username = "Minimum length is 4 characters";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.password !== values.confirmPassword) {
    errors.password = "Password did not match";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  }
  return errors;
};

export default reduxForm({
  form: "registerForm",
  validate
})(RegisterForm);