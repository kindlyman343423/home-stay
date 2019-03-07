import React, { Component } from "react";
import LoginForm from "./LoginForm";

import* as actions from '../../actions';

class Login extends Component {

  state = {
    auth: false,
    errors: []
  }

  loginUser = (values) =>{
    actions.loginUser(values)
      .then(resp => {
        this.setState({auth: true})
      })
      .catch(errors => this.setState({errors}))
  }

  render() {
    console.log(this.state)
    return (
      <section id="login">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Login</h1>
              <LoginForm loginUser={this.loginUser} errors={this.state.errors}/>
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

export default Login;
