import React, { Component } from "react";
import "./App.css";
import Header from "./shared/Header";
import RentalList from "./components/rental/RentalList";
import RentalDetail from "./components/rental/RentalDetail";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/rentals" component={RentalList}/>
            <Route exact path="/rentals/:id" component={RentalDetail}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
