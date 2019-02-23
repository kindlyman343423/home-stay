import React, { Component } from "react";

class RentalDetail extends Component {
  render() {
    return (
      <div>
        <h2>What up I'm detail page {this.props.match.params.id} </h2>
      </div>
    );
  }
}

export default RentalDetail;
