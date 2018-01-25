import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadImages, addTag} from './actions';
import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { RenderImages } from './App.components';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      view: 'Images'
    }

    this.changeView=this.changeView.bind(this)
    this.addNewTag=this.addNewTag.bind(this)
  }

  componentWillMount() {
    this.props.loadImages();
  }

  changeView(e){
    e.preventDefault();
    const { innerText } = e.target;
    this.setState({view: innerText})
    this.props.location.pathname = '/'+innerText;
  }

  addNewTag(id,tag){
    this.props.addTag(id, tag)
  }




  render() {
    const { view } = this.state;
    const { images } = this.props;
    switch(view) {
      case 'Images':
        return (
          <div>
            <Header changeView={(e)=>this.changeView(e)}/>
            <RenderImages addNewTag={this.addNewTag} images={images} />
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
      case 'organiZhit':
        return (
          <div>
            <Header changeView={(e)=>this.changeView(e)}/>
            <h1>Home</h1>
          </div> )
    }
  }
}

function mapStateToProps(state){
  return{
    images: state.images
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadImages: loadImages,
    addTag: addTag,
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
