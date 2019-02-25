import * as redux from 'redux';
import {rentalReducer, rentalReducerById} from './rental-reducer';

import thunk from 'redux-thunk';

export const init = () =>{

 const reducer = redux.combineReducers({
  rentals: rentalReducer,
  rental: rentalReducerById
 })

 const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
 // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

 return store
}