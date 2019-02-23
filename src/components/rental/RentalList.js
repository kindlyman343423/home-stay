import React, { Component } from 'react'
import { RentalCard } from './RentalCard';

import {connect} from 'react-redux';

class RentalList extends Component {

 renderRental = () =>{
  return this.props.rentals.map(rental => (
    <RentalCard rental={rental} key={rental}/>
  ))
 }

 render() {
  return (
   <section id="rentalListing">
     <h1 className="page-title">Your Home All Around the World</h1>
     <div className="row">
       {this.renderRental()}
     </div>
   </section>
  )
 }
}

function mapStateToProps(state){
 return{
  rentals: state.rentals
 }
}

export default connect(mapStateToProps)(RentalList);