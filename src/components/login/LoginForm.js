import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../../shared/FormField";
import FormError from "../../shared/FormError";

const LoginForm = props => {
  const {
    handleSubmit,
    pristine,
    submitting,
    loginUser,
    errors
  } = props;
  return (
    <form onSubmit={handleSubmit(loginUser)}>

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

        <button
          className="btn btn-bwm btn-form"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
        {errors.length > 0 && <FormError errors={errors}/>}
    </form>
  );
};

export default reduxForm({
  form: "loginForm"
})(LoginForm);
