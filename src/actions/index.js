import {
  FETCH_RENTALS,
  FETCH_RENTAL_BYID,
  FETCH_RENTAL_BYID_INIT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT
} from "./types";
import axios from "axios";
import { baseUrlRemote, baseUrlLocal } from "../helpers";
import authService from "../services/auth-service";

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
      .get(baseUrlLocal + "/api/rentals")
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
      .get(baseUrlLocal + `/api/rentals/${rentalId}`)
      .then(res => res.data)
      .then(rental => {
        return dispatch(fetchRentalById(rental));
      });
  };
};

// Auth actions-------------------------

export const registerUser = userData => {
  return axios
    .post(baseUrlLocal + "/api/users/register", userData)
    .then(resp => {
      return resp.data;
    })
    .catch(err => {
      console.log(err);
      return Promise.reject(err.response.data);
    });
};

const loginSuccess = token => {
  return {
    type: LOGIN_USER_SUCCESS,
    token
  };
};

const loginFailure = err => {
  return {
    type: LOGIN_USER_FAILURE,
    err
  };
};

export const loginUser = userData => {
  return function(dispatch) {
    axios
      .post(baseUrlLocal + "/api/users/auth", userData)
      .then(resp => resp.data.token)
      .then(token => {
        localStorage.setItem("auth_token", token);
        return dispatch(loginSuccess(token));
      })
      .catch(err =>{
        return dispatch(loginFailure(err.response.data))
      });
  };
};

export const checkAuth = () =>{
  return dispatch =>{
    if(authService.isAuthenticated()){
      dispatch(loginSuccess())
    }
  }
}

export const logout = () =>{
  authService.logout()
  return {
    type: LOGOUT
  }
}