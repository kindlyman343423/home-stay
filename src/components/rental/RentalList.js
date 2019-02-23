import React, { Component } from "react";
import { RentalCard } from "./RentalCard";

import * as actions from "../../actions";

import { connect } from "react-redux";

class RentalList extends Component {
  renderRental = () => {
    return this.props.rentals.map(rental => (
      <RentalCard rental={rental} key={rental} />
    ));
  };

  componentDidMount() {
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">{this.renderRental()}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

export default connect(mapStateToProps)(RentalList);
