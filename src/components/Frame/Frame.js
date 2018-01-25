import React, { Component } from 'react';
import './Frame.css';

const img = 'http://img-aws.ehowcdn.com/560x560p/photos.demandstudios.com/getty/article/81/28/86480446.jpg';

class Frame extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
        <div className="container wrap">

          <div className="content-container">
              
              <div className="content-onhover">
                <span className="content-onhover-span">
                  <a id='add' href="" className="add-tag">+</a>
                </span>
                <span className="content-onhover-span">
                  <a id='del' href="" className="del-tag">x</a>
                  <a id='tag' href="" className="tag-click">ssss</a>
                </span>
              </div>
              <img src={img} alt=""/> 

          </div>



        </div>
      )
  }
}

export default Frame;