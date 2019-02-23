import * as redux from 'redux';
import {rentalReducer} from './rental-reducer';

export const init = () =>{

 const reducer = redux.combineReducers({
  rentals: rentalReducer
 })

 const store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 return store
}