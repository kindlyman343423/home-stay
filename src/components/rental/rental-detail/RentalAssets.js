import React from "react";

const RentalAssets = () => {
  return (
    <div className="rental-assets">
      <h3 className="title">Assets</h3>
      <div className="row">
        <div className="col-md-6">
          <span>
            <i className="fa fa-asterisk" /> Cooling
          </span>
          <span>
            <i className="fa fa-thermometer" /> Heating
          </span>
          <span>
            <i className="fa fa-location-arrow" /> Iron
          </span>
        </div>
        <div className="col-md-6">
          <span>
            <i className="fa fa-desktop" /> Working area
          </span>
          <span>
            <i className="fa fa-cube" /> Washing machine
          </span>
          <span>
            <i className="fa fa-cube" /> Dishwasher
          </span>
        </div>
      </div>
    </div>
  );
};

export default RentalAssets;
