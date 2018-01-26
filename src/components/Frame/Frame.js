import React, { Component } from 'react';
import './Frame.css';
import { AddTagButton, Tags, OrginalLink, ImageSrc, TagInput } from './components';






class Frame extends Component {
  constructor(props){
    super(props);

    this.state = {
      tag: '',
      adding: false
    }

    this.addNewTag=this.addNewTag.bind(this);
    this.handleTagChange=this.handleTagChange.bind(this);
    this.tagStatus=this.tagStatus.bind(this);
    this.findTag=this.findTag.bind(this);
  }

  handleTagChange(e){
    let {value} = e.target;
    this.setState({tag: value})
  }

  addNewTag(e){
    e.preventDefault();
    let {adding} = this.state;
    this.setState({adding:!adding})
  }

  tagStatus(e){
    e.preventDefault();
    let {id,name} = e.target;
    let {tag,adding} = this.state;
    if(name === 'save'){
      this.setState({adding:!adding})
      this.props.addNewTag(id,tag)
    }else {
      this.setState({adding:!adding})
    }
  }

  findTag(e){
    e.preventDefault();
    this.props.filterTag(e.target.name);
  }





  render(){
    const {adding} = this.state;
    const {elem} = this.props;
    return(
        
        
        <div className="grid-item gridbox">
          {adding ? 
            <TagInput
              elem={elem} 
              handleTagChange={this.handleTagChange}
              tagStatus={this.tagStatus} /> : null}
          <div className="content-onhover">
            <AddTagButton
              addNewTag={this.addNewTag}
              elem={elem} />
            <Tags
              findTag={this.findTag}
              elem={elem} />
            <OrginalLink
              elem={elem} /> 
          </div>
          <ImageSrc
            elem={elem} />
        </div>
      )
  }
}

export default Frame;