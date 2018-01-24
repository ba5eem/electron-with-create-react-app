import React, { Component } from 'react';
import './Card.css';




const TagOverlay = ({tags}) => {
  return (
    <div className="tag-overlay">
      <a id='new' href="" className="tag-new">+</a>
      
      {tags.map((elem,i) => {
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




class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false
    }
    this.showTagOverlay=this.showTagOverlay.bind(this);
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
      console.log('new');
    }
    if(id === 'tag'){
      console.log(innerText);
    }
    if(id === 'del'){
      console.log('delete');
    }
    
  }









  render() {
    const { show } = this.state;
    const {id,source, tags} = this.props.src;

    return (
      <div
        className="img-container" 
        id="img" 
        onClick={(e)=>this.showTagOverlay(e)}>

        {show ? 
        <TagOverlay 
          tags={tags} 
          tagClick={this.showTagOverlay}/> 
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




export default Card;









