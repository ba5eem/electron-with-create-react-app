import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Header } from './components';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
        <div>
          <Header />

          
        </div>
      )
  }
}

export default App;