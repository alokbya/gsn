import React, { Component } from 'react';
import logo from './logo.svg'; //Image example
import './App.css';
import Header from './components/header'
import SideNav from './components/sideNav'
import BreadCrumb from './components/breadCrumb'
import Main from './components/main'



class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet"/> {/*TODO: update to react style. */}

        <SideNav />

        <Header />

        <BreadCrumb />

        <Main />
      </div>
    );
  }
}

export default App;
