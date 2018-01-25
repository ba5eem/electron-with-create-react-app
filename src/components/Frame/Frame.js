import React, { Component } from 'react';
import './Frame.css';
import { AddTagButton, Tags, OrginalLink, ImageSrc } from './components';



class Frame extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
        

        <div className="content-container">
          <div className="content-onhover">
            <AddTagButton />
            <Tags />
            <OrginalLink /> 
          </div>
          <ImageSrc />
        </div>
      )
  }
}

export default Frame;