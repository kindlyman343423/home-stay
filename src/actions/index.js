import {
  FETCH_RENTALS,
  FETCH_RENTAL_BYID,
  FETCH_RENTAL_BYID_INIT
} from "./types";
import axios from "axios";

export const fetchRentals = rentals => {
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
    axios
      .get("/api/rentals")
      .then(res => res.data)
      .then(rentals => {
        return dispatch(fetchRentals(rentals));
      });
  };
};

export const getRentalById = rentalId => {
  return function(dispatch) {
    dispatch(fetchRentalById_INIT());
    axios
      .get(`/api/rentals/${rentalId}`)
      .then(res => res.data)
      .then(rental => {
        return dispatch(fetchRentalById(rental));
      });
  };
};
