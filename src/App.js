import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main, Header,Card } from './components';






class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <div className="main wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    );
  }
}

export default App;
