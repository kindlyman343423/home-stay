import React from 'react'

export function RentalCard(props) {
 const {rental} = props;
  return (
   <div className='col-md-3 col-xs-6'>
                <div className="card bwm-card">
                  <img className="card-img-top" src={rental.image} alt=""></img>
                  <div className="card-block">
                    <h6 className="card-subtitle">{rental.shared ? 'Shared': 'Whole'} {rental.category} &#183; {rental.city}</h6>
                    <h4 className="card-title">{rental.description}</h4>
                    <p className="card-text">{rental.dailyRate} per Night &#183; Free Cancelation</p>
                    <a href="" className="card-link">More Info</a>
                  </div>
                </div>
              </div>
  )
}
