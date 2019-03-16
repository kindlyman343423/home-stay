import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/rentals");
  };

  renderLinks = () => {
    return !this.props.auth.isAuth ? (
      <div className="navbar-nav ml-auto">
        <Link className="nav-item nav-link active" to="/login">
          Login <span className="sr-only">(current)</span>
        </Link>
        <Link className="nav-item nav-link" to="/register">
          Register
        </Link>
      </div>
    ) : (
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link clickable" onClick={this.handleLogout}>
          Logout
        </a>
      </div>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NepStay
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 bwm-search"
              type="search"
              placeholder="Try 'New Baneshwor'"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search"
              type="submit"
            >
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {this.renderLinks()}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(Header));
