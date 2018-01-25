import React from 'react';


const img = 'http://img-aws.ehowcdn.com/560x560p/photos.demandstudios.com/getty/article/81/28/86480446.jpg';
const link = '< >';

export const AddTagButton = () => {
  return (
    <span className="content-onhover-span">
      <a id='add' href="" className="add-tag">+</a>
    </span>
    )
}

export const Tags = () => {
  return (
    <span className="content-onhover-span">
      <a id='del' href="" className="del-tag">x</a>
      <a id='tag' href="" className="tag-click">ssss</a>
    </span>
    )
}

export const OrginalLink = () => {
  return (
    <span className="content-onhover-span">
      <a id='add' href="" className="link-tag">{link}</a>
    </span>
    )
}

export const ImageSrc = () => {
  return <img src={img} alt=""/> 
}