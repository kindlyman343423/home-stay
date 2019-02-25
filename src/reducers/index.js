import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {rentalReducer, rentalReducerById} from './rental-reducer';

import thunk from 'redux-thunk';

export const init = () =>{

 const reducers = combineReducers({
  rentals: rentalReducer,
  rental: rentalReducerById
 })

 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(
   reducers,
   composeEnhancer(applyMiddleware(thunk)),
 );

 return store
}