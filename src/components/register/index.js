import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

import * as actions from "../../actions";

import { Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    errors: [],
    redirect: false
  };

  registerUser = value => {
    actions
      .registerUser(value)
      .then(resp => {
        this.setState({ redirect: true });
      })
      .catch(errors => {
        this.setState({ errors });
      });
  };
  render() {
    return this.state.redirect ? (
      <Redirect to={{ pathname: "/login", state: { successRegister: true } }} />
    ) : (
      <section id="register">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Register</h1>
              <RegisterForm
                registerUser={this.registerUser}
                errors={this.state.errors}
              />
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">
                  As our member you have access to most awesome places in Nepal.
                </h2>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
