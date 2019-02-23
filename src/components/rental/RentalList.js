import React, { Component } from 'react'
import { RentalCard } from './RentalCard';

class RentalList extends Component {

 state = {
  rentals: [1, 2, 3]
 }

 renderRental = () =>{
  return this.state.rentals.map(rental => (
   <React.Fragment key={rental}>
    <RentalCard />
   </React.Fragment>
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

export default RentalList;