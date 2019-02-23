const INITIAL_STATE = {
  data: []
};

export const rentalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_RENTALS":
      return { ...state, data: action.rentals };
    default:
      return state;
  }
};
