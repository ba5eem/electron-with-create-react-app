import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadImages,addTag, addImage } from './actions/imageActions';
import { Header, Frame, tagFilter, NotFound } from './components';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tag: undefined

    }
    this.addNewTag=this.addNewTag.bind(this)
    this.filterTag=this.filterTag.bind(this)
    this.newPin=this.newPin.bind(this)
  }

  componentWillMount() {
    this.props.loadImages();
  }

  addNewTag(id,tag){
    this.props.addTag(id, tag)
  }

  filterTag(tag){
    if(tag.length !==0){
      this.setState({tag: tag})
    }
    if(tag.length === 0){
      this.setState({tag: undefined})
    }
  }

  newPin(url){
    this.props.addImage(url);
  }







  render(){
    const {images} = this.props;
    const {tag} = this.state;
    const data = tagFilter(images,tag)
    let notFound = data.length === 0 ? true : false;

    return(
        <div>
          <Header newPin={this.newPin} filterTag={this.filterTag} />
          {notFound ? <NotFound /> : null }
          <div className="container wrap">
            {data.map((elem,i) => {
              return (
                    <Frame
                      addNewTag={this.addNewTag}
                      filterTag={this.filterTag}
                      elem={elem}
                      i={i} 
                      key={i} />
                    )
            })}
          </div>
        </div>
      )
  }
}




const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadImages:loadImages,
    addTag:addTag,
    addImage:addImage
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);