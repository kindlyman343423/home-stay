import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../actions";

class RentalDetail extends Component {
  componentDidMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.getRentalById(rentalId));
  }

  render() {
    const {rental} = this.props;
    return (
      <div>
        <h2>{rental.title}</h2>
        <h2>{rental.city}</h2>
        <h2>{rental.description}</h2>
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
