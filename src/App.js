import React, { Component } from 'react';
import './App.css';
import Header from "./shared/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>This is from app component</p>
      </div>
    );
  }
}

export default App;
