import React, { Component } from 'react';
import './Images.css';
import { TagOverlay, AddNewTagOverlay, AddNewImageUrl } from './Images.components';


class Images extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false,
      add: false,
      newImg: false,
      imgUrl: '',
      tag: ''
    }
    this.showTagOverlay=this.showTagOverlay.bind(this);
    this.addNewTag=this.addNewTag.bind(this);
    this.handleTag=this.handleTag.bind(this);
    this.handleImgUrl=this.handleImgUrl.bind(this);
    this.addNewImage=this.addNewImage.bind(this);
  }


  showTagOverlay(e){
    e.preventDefault();
    const {id, innerText,className,name,title} = e.target;
    if(id === 'close'){
      this.setState({show: !this.state.show})
    }
    if(id === 'img' && className !== "newImage"){
      this.setState({show: !this.state.show})
    }
    if(id === 'new'){
      this.setState({add: !this.state.add})
    }
    if(id === 'tag'){
      this.props.tagSearch(innerText);
    }
    if(id === 'del'){
      this.props.deleteTag(name,title);
    }
    if(className === 'newImage'){
      this.setState({newImg: !this.state.newImg})
    }
  }

  handleTag(e){
    this.setState({tag: e.target.value})
  }

  addNewTag(e){
    e.preventDefault();
    const {id,name} = e.target;
    if(id === 'cancel'){
      this.setState({add: !this.state.add})
    }
    if(id === 'add'){
      //further tools to help populate already used tags, stretch goal
      //name === id of obj thats getting new tag, terrible naming i know
      this.props.addNewTag(name,this.state.tag);
      this.setState({add: !this.state.add})
    } 
  }

  handleImgUrl(e){
    this.setState({imgUrl: e.target.value})
  }

  addNewImage(e){
    e.preventDefault();
    const {id} = e.target;
    if(id === 'cancel'){
      this.setState({newImg: !this.state.newImg})
    }
    if(id === 'add'){
      //further tools to help populate already used tags, stretch goal
      //name === id of obj thats getting new tag, terrible naming i know
      this.props.addNewImage(this.state.imgUrl);
      this.setState({newImg: !this.state.newImg})
    } 
  }










  render() {
    const { show, add, newImg } = this.state;
    const { src } = this.props;


    return (
      <div
        className='img-container' 
        id="img" 
        onClick={(e)=>this.showTagOverlay(e)}>

        {show ? 
        <TagOverlay 
          obj={src}
          tagClick={this.showTagOverlay}/> 
        : null }

        {add ? 
        <AddNewTagOverlay
          obj={src} 
          handleTag={this.handleTag} 
          addNewTag={this.addNewTag} /> 
        : null }

        {newImg ? 
        <AddNewImageUrl
          obj={src} 
          handleImgUrl={this.handleImgUrl} 
          addNewImage={this.addNewImage} /> 
        : null }
        

        <img 
          id="img" 
          src={src.source} 
          alt=""
          className={src.id} 
          style={image}/>
        
      </div>





    );
  }
}


const style = {
  image:{
    width: 100+'%',
    height: 'auto'

  }
}

const { image } = style;




export default Images;









