import React, { Component } from 'react';
import './Card.css';

const src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/157453-200.png';

const TagOverlay = () => {
  return (
    <div className="tag-overlay">

    </div>
    )
}




class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false
    }
  }









  render() {
    const { show } = this.state;
    return (
      <div className="img-container">
      {show ? <TagOverlay/> : null }
        <img src={src} alt="" style={image}/>
        
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









