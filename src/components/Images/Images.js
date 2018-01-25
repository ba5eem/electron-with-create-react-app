import React, { Component } from 'react';
import './Images.css';




const TagOverlay = ({obj}) => {
  return (
    <div className="tag-overlay">
      <a id='new' href="" className="tag-new">+</a>
      
      {obj.tags.map((elem,i) => {
        return (
          <span key={i} className="tag-container">
            <a id='del' href="" className="del-tag">x</a>
            <a id='tag' href="" className="tag-click">{elem}</a>
          </span>
          )
      })}
      <br/>
      <a id='close' href="" className="tag-close">close</a>

    </div>
    )
}

const AddNewTagOverlay = ({obj,addNewTag,handleTag}) => {
  return (
    <div className="add-overlay">
      <br/>
      <form>
        <input 
          type="text" 
          className="add-tag-input"
          onChange={handleTag} 
          placeholder="tag:"/>
        <br/>
        <input 
          onClick={addNewTag} 
          id='cancel' 
          type="button" 
          className="add-tag-button" 
          value="nah"/>
        <span className="add-tag-span">....</span>
        <input 
          type="submit" 
          id='add'
          name={obj.id} 
          onClick={addNewTag}
          className="add-tag-button" 
          value="add"/>
      </form>
    </div>
    )
}




class Images extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false,
      add: false,
      tag: ''
    }
    this.showTagOverlay=this.showTagOverlay.bind(this);
    this.addNewTag=this.addNewTag.bind(this);
    this.handleTag=this.handleTag.bind(this);
  }


  showTagOverlay(e){
    e.preventDefault();
    const {id, innerText} = e.target;
    if(id === 'close'){
      this.setState({show: !this.state.show})
    }
    if(id === 'img'){
      this.setState({show: !this.state.show})
    }
    if(id === 'new'){
      this.setState({add: !this.state.add})
    }
    if(id === 'tag'){
      console.log(innerText);
    }
    if(id === 'del'){
      console.log('delete');
    }
  }

  handleTag(e){
    console.log(e.target.value);
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










  render() {
    const { show, add } = this.state;
    const {id,source,tags} = this.props.src;

    return (
      <div
        className="img-container" 
        id="img" 
        onClick={(e)=>this.showTagOverlay(e)}>

        {show ? 
        <TagOverlay 
          obj={this.props.src}
          tagClick={this.showTagOverlay}/> 
        : null }

        {add ? 
        <AddNewTagOverlay
          obj={this.props.src} 
          handleTag={this.handleTag} 
          addNewTag={this.addNewTag} /> 
        : null }

        <img 
          id="img" 
          src={source} 
          alt="" 
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









