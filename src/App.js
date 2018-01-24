import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main, Header,Card } from './components';

const src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/157453-200.png';




class App extends Component {
  render() {
    const images = [{id: "01", source: src, tags:['1','sssss','one','two','three']}, {id: "02", source: src, tags:['a','b','c']}];
    return (
      <div className="App">
        <Header/>
        <div className="main wrap">
          {images.map((elem,i) => {
            return (
              <Card key={i}  src={elem}/>
              )
            }) 
          }
        </div>
      </div>
    );
  }
}

export default App;
