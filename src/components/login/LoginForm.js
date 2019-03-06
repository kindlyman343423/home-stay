import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../../shared/FormField";
import FormError from "../../shared/FormError";

const RegisterForm = props => {
  const {
    handleSubmit,
    pristine,
    submitting,
    loginUser,
  } = props;
  return (
    <form onSubmit={handleSubmit(loginUser)}>

      <Field
        name="email"
        component="input"
        type="email"
        placeholder="Email"
        className="form-control"
        component={renderField}
        label="Email"
      />

      <Field
        name="password"
        component="input"
        type="password"
        placeholder="Password"
        className="form-control"
        component={renderField}
        label="Password"
      />

        <button
          className="btn btn-bwm btn-form"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
    </form>
  );
};

export default reduxForm({
  form: "registerForm"
})(RegisterForm);
