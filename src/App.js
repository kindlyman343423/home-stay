import React, { Component } from 'react';
import './App.css';
import Header from "./shared/Header";
import RentalList from './components/rental/RentalList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <RentalList />
        </div>
      </div>
    );
  }
}

export default App;
