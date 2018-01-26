import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadImages,addTag } from './actions/imageActions';
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







  render(){
    const {images} = this.props;
    const {tag} = this.state;
    const data = tagFilter(images,tag)
    let notFound = data.length === 0 ? true : false;

    return(
        <div>
          <Header filterTag={this.filterTag} />
          {notFound ? <NotFound /> : null }
          <div className="grid">
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
    addTag:addTag
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);