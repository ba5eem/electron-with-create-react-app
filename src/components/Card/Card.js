import React, { Component } from 'react';
import './Card.css';

const src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/157453-200.png';

const tags = ['onssssssse', 'twsssssso', 'threethreethree','one', 'two', 'three','one', 'two', 'three']

const TagOverlay = ({tagClick}) => {
  return (
    <div className="tag-overlay">
    <button className="badge badge-primary-new" id="new">  +  </button>
      {tags.map((elem,i) => {
        return (
          <span key={i} id={i} onClick={(e)=>tagClick(e)} className="badge badge-primary">x {elem}</span>
          )
      })}

    <button className="badge badge-primary-close" id="img">close</button>
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
      console.log('newww')
    }
    
  }









  render() {
    const { show } = this.state;
    return (
      <div className="img-container" id="img" onClick={(e)=>this.showTagOverlay(e)}>
      {show ? <TagOverlay tagClick={this.showTagOverlay}/> : null }
        <img id="img" src={src} alt="" style={image}/>
        
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









