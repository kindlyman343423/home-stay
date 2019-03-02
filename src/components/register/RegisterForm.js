import React from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="input-group">
      <input {...input} placeholder={label} type={type} className={className} />
    </div>
    {touched && (error && <div className="alert alert-danger">{error}</div>)}
  </div>
);

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting, registerUser } = props;
  return (
    <form onSubmit={handleSubmit(registerUser)}>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Username"
            className="form-control"
            component={renderField}
            label="Username"
          />

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

          <Field
            name="confirmPassword"
            component="input"
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            component={renderField}
            label="Confirm Password"
          />

      <div>
        <button
          className="btn btn-bwm btn-form"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
      </div>
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
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  if (values.password !== values.confirmPassword) {
    errors.password = "Password did not match";
  }
  if (!values.password) {
    errors.age = "Password is required";
  }
  if (!values.confirmPassword) {
    errors.age = "Confirm Password is required";
  }
  return errors;
};

export default reduxForm({
  form: "registerForm",
  validate
})(RegisterForm);
