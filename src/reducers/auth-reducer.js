import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT} from "../actions/types";

const INITIAL_STATE = {
  isAuth: false,
  errors: []  
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true, errors: [] };
    case LOGIN_USER_FAILURE:
      return { ...state, isAuth: false, errors: action.err };
    case LOGOUT:
      return {...state, isAuth: false}
    default:
      return state;
  }
};