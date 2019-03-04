import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Pages/Auth/Auth.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
