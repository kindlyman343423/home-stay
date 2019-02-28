import React from "react";
import RentalAssets from "./RentalAssets";
import {toUpperCase, isShared} from '../../../helpers';

const RentalDetailInfo = (props) => {
 const {rental} = props;
  return (
    <div className="rental">
      <h2 className={`rental-type ${rental.category}`}>
        {isShared(rental.shared)} {rental.category}
      </h2>
      <h1 className="rental-title">{rental.title}</h1>
      <h2 className="rental-city">{toUpperCase(rental.city)}</h2>
      <div className="rental-room-info">
        <span>
          <i className="fa fa-building" />
          {rental.bedrooms} bedrooms
        </span>
        <span>
          <i className="fa fa-user" /> {rental.bedrooms + 4} guests
        </span>
        <span>
          <i className="fa fa-bed" /> {rental.bedrooms + 2} beds
        </span>
      </div>
      <p className="rental-description">{rental.description}</p>
      <hr />
      <RentalAssets />
   </div>
  );
};

export default RentalDetailInfo;