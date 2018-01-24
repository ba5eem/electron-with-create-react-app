import React, { Component } from 'react';
import './Card.css';




const TagOverlay = ({tags,tagClick}) => {
  return (
    <div className="tag-overlay">
      <button 
        className="badge badge-primary-new" 
        id="new">+  
      </button>
      
      {tags.map((elem,i) => {
        return (
          <span className="tag-container">
            <a href="" className="del-tag"><span>.</span>x<span>.</span></a>
            <a href="" className="tag-click">{elem}</a>
          </span>
          )
      })}

      <button 
        className="badge badge-primary-close" 
        id="img">close
      </button>

    </div>
    )
}




class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: true
    }
    this.showTagOverlay=this.showTagOverlay.bind(this);
  }


  showTagOverlay(e){
    const {id} = e.target;
    if(id === 'img'){
      this.setState({show: !this.state.show})
    }
    if(id === 'new'){
      
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









