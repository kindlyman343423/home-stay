import { FETCH_RENTALS, FETCH_RENTAL_BYID } from "../actions/types";

const INITIAL_STATE = {
  rentals: {
    data: []
  },
  rental: {
    data: {}
  }
};

export const rentalReducer = (state = INITIAL_STATE.rentals, action) => {
  switch (action.type) {
    case FETCH_RENTALS:
      return { ...state, data: action.rentals };
    default:
      return state;
  }
};

export const rentalReducerById = (state = INITIAL_STATE.rental, action) => {
  switch(action.type){
    case FETCH_RENTAL_BYID:
      return {...state, data: action.rental}
    default:
      return state;
  }
}