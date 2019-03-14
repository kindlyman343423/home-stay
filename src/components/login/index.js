import React, { Component } from "react";
import LoginForm from "./LoginForm";

import * as actions from "../../actions";

import { connect } from "react-redux";

import {Redirect} from 'react-router-dom';

class Login extends Component {

  loginUser = values => {
    this.props.dispatch(actions.loginUser(values));
  };

  render() {
    const {isAuth, errors} = this.props.auth;
    return isAuth ? <Redirect to="/rentals"/> : (
      <section id="login">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Login</h1>
              <LoginForm
                loginUser={this.loginUser}
                errors={errors}
              />
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">
                  Hundreds of awesome places in reach of few clicks.
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);
