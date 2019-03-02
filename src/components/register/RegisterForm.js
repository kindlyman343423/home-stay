import React from 'react'
import { Field, reduxForm } from 'redux-form'

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Username"
            className="form-control"
          />
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
      </div>

      <div>
        <label>Confirm Password</label>
        <div>
          <Field
            name="confirmPassword"
            component="input"
            type="password"
            placeholder="Confirm Password"
            className="form-control"
          />
        </div>
      </div>
      
      <div>
        <button className="btn btn-bwm btn-form" type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'registerForm' // a unique identifier for this form
})(RegisterForm)