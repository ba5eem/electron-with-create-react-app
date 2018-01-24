import React, { Component } from 'react';
import './Card.css';

const src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/157453-200.png';

const tags = ['one', 'two', 'three']

const TagOverlay = () => {
  return (
    <div className="tag-overlay">
      {tags.map((elem) => {
        return(<span class="badge badge-primary">x {elem}</span>)
      })}

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


  showTagOverlay(){
    this.setState({show: !this.state.show})
  }








  render() {
    const { show } = this.state;
    return (
      <div className="img-container" onClick={this.showTagOverlay}>
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









