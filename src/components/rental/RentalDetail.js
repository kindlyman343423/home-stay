import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../actions";

class RentalDetail extends Component {
  componentDidMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.getRentalById(rentalId));
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>{this.props.rental.title}</h2>
        <h2>{this.props.rental.city}</h2>
        <h2>{this.props.rental.description}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rental: state.rental.data
  };
};

export default connect(mapStateToProps)(RentalDetail);
