import {
  FETCH_RENTALS,
  FETCH_RENTAL_BYID,
  FETCH_RENTAL_BYID_INIT
} from "./types";
import axios from "axios";

export const fetchRentals = (rentals) => {
  return {
    type: FETCH_RENTALS,
    rentals
  };
};

const fetchRentalById_INIT = () => {
  return {
    type: FETCH_RENTAL_BYID_INIT
  };
};

const fetchRentalById = rental => {
  return {
    type: FETCH_RENTAL_BYID,
    rental
  };
};

export const getRentals = () => {
  return function(dispatch) {
    axios.get("/api/rentals").then(rentals => {
      console.log(rentals)
      dispatch(fetchRentals(rentals.data));
    });
  };
};

export const getRentalById = rentalId => {
  return function(dispatch) {
    dispatch(fetchRentalById_INIT());
    // setTimeout(() => {
    //   let rental = rentals.find(rental => rental.id === rentalId);
    //   dispatch(fetchRentalById(rental));
    // }, 1000);
  };
};
