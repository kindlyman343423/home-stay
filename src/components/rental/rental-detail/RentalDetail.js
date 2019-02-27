import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../../actions";
import RentalDetailInfo from "./RentalDetailInfo";

class RentalDetail extends Component {
  componentDidMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.getRentalById(rentalId));
  }

  render() {
    const { rental } = this.props;
    return rental._id ? (
      <section id='rentalDetails'>
  <div className='upper-section'>
    <div className='row'>
      <div className='col-md-6'>
        <img src={rental.image} alt=''></img>
      </div>
      <div className='col-md-6'>
        <img src={rental.image} alt=''></img>
      </div>
    </div>
  </div>

  <div className='details-section'>
    <div className='row'>
      <div className='col-md-8'>
       <RentalDetailInfo rental={rental}/>
      </div>
      <div className='col-md-4'> BOOKING</div>
    </div>
  </div>
</section>

    ) : (
      <h2>Loading...</h2>
    );
  }
}

const mapStateToProps = state => {
  return {
    rental: state.rental.data
  };
};

export default connect(mapStateToProps)(RentalDetail);
