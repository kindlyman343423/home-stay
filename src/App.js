import React, { Component } from "react";
import "./App.css";
import Header from "./shared/Header";
import RentalListing from "./components/rental/rental-listing/RentalListing";

import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import Login from "./components/login";
import Register from "./components/register";

const store = require('./reducers').init();

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/rentals" component={RentalListing} />
               
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
