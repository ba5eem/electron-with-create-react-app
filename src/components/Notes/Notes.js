import React, { Component } from 'react';
import './Notes.css';

const addSrc = 'http://bit.ly/2DDvgSf';
const noteImg = 'https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png';




class Notes extends Component {
  constructor(props){
    super(props);

    this.state = {
      note: undefined
    }
    
  }

  






  render() {
    const {src} = this.props;
    
    return (
      <div className="main wrap">
        <div className="note-container">
          <h3>{src.title}</h3>
          <img src={noteImg} alt=""/>
          <h6>{src.date}</h6>
        </div>
        
      </div>
    );
  }
}



export default Notes;
