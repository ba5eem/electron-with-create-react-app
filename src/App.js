import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadImages, addTag, addImage,removeTag} from './actions';
import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { RenderImages,tagFilter } from './App.components';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      view: 'Images',
      tag: undefined
    }

    this.changeView=this.changeView.bind(this)
    this.addNewTag=this.addNewTag.bind(this)
    this.addNewImage=this.addNewImage.bind(this)
    this.deleteTag=this.deleteTag.bind(this)
    this.tagSearch=this.tagSearch.bind(this)
    this.tagSearchBar=this.tagSearchBar.bind(this)
  }

  componentWillMount() {
    this.props.loadImages();
  }

  changeView(e){
    e.preventDefault();
    const { innerText } = e.target;
    this.setState({view: innerText})
    this.setState({tag: undefined})
    this.props.location.pathname = '/'+innerText;
  }

  addNewTag(id,tag){
    this.props.addTag(id, tag)
  }

  addNewImage(url){
    this.props.addImage(url);
  }

  deleteTag(id,tag){
    this.props.removeTag(id,tag);
  }

  tagSearch(tag){
    this.setState({tag: tag})
  }

  tagSearchBar(e){
    let {value} = e.target;
    if(value.length !== 0){
      this.setState({tag: value})
    } 
    if(value.length === 0){
      this.setState({tag: undefined})
    }
  }




  render() {
    const { view,tag } = this.state;
    const data = this.props.images
    let images = tagFilter(data,tag);
    let notFound = images.length === 0 ? true : false;
    
    switch(view) {
      case 'Images':
        return (
          <div>
            <Header 
              tagSearch={this.tagSearchBar}
              changeView={(e)=>this.changeView(e)}/>
            <RenderImages 
              addNewTag={this.addNewTag}
              addNewImage={this.addNewImage}
              deleteTag={this.deleteTag}
              tagSearch={this.tagSearch} 
              notFound={notFound}
              images={images} />
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
    addImage:addImage,
    removeTag:removeTag
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
