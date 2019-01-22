import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Homepage';
import './App.css';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-sm-12">
            <HomePage />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
