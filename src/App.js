import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main, Header,Card, Notes } from './components';

const src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/157453-200.png';
const images = [{id: "01", source: src, tags:['1','sssss','one','two','three']}, {id: "02", source: src, tags:['a','b','c']}];

const RenderImages = () => {
  return (

      <div className="main wrap">
          {images.map((elem,i) => {
            return (
              <Card key={i}  src={elem}/>
              )
            }) 
          }
        </div>
        )
}



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      view: 'Images'
    }

    this.changeView=this.changeView.bind(this)
  }


  changeView(e){
    e.preventDefault();
    const { innerText } = e.target;
    this.setState({view: innerText})
  }




  render() {
    const { view } = this.state;
    switch(view) {
      case 'Images':
        return (
          <div>
            <Header changeView={(e)=>this.changeView(e)}/>
            <RenderImages />
          </div> )
      case 'Notes':
        return (
          <div>
            <Header changeView={(e)=>this.changeView(e)}/>
            <h1>Notes</h1>
          </div> )
      case 'Articles':
        return (
          <div>
            <Header changeView={(e)=>this.changeView(e)}/>
            <h1>Articles</h1>
          </div> )
      case 'Random':
        return (
          <div>
            <Header changeView={(e)=>this.changeView(e)}/>
            <h1>Random</h1>
          </div> )
      case 'Home':
        return (
          <div>
            <Header changeView={(e)=>this.changeView(e)}/>
            <h1>Home</h1>
          </div> )
    }
  }
}

export default App;
