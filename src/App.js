import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Header, Frame } from './components';
import './App.css';

const data = ['1','2'];


class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }


  renderFrames(){
    return(<Frame />)
  }





  render(){
    return(
        <div>
          <Header />
          <div className="container wrap">
            {data.map(this.renderFrames)}
          </div>
        </div>
      )
  }
}

export default App;