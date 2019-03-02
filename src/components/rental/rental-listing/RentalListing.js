import React, { Component } from "react";
import RentalList from './RentalList'

import * as actions from "../../../actions";

import { connect } from "react-redux";

class RentalListing extends Component {

  componentDidMount() {
    this.props.dispatch(actions.getRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Round Nepal</h1>
        <RentalList rentals={this.props.rentals}/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

export default connect(mapStateToProps)(RentalListing);
