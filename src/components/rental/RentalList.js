import React, { Component } from 'react'
import { RentalCard } from './RentalCard';

class RentalList extends Component {
 render() {
  return (
   <section id="rentalListing">
     <h1 className="page-title">Your Home All Around the World</h1>
     <div className="row">
       <RentalCard />
       <RentalCard />
       <RentalCard />
     </div>
   </section>
  )
 }
}

export default RentalList;