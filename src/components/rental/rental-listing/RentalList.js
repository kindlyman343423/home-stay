import React, { Component } from "react";
import { RentalCard } from "./RentalCard";

class RentalList extends Component {
  renderRental = () => {
    return this.props.rentals.map(rental => (
      <RentalCard rental={rental} key={rental.id} />
    ));
  };

  render() {
    return (
        <div className="row">{this.renderRental()}</div>
    );
  }
}

export default RentalList;
