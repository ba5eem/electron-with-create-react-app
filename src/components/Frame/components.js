import React from 'react';


const link = '< >';


export const AddTagButton = ({elem,addNewTag}) => {
  return (
    <span className="content-onhover-span">
      <a 
        onClick={addNewTag} 
        id='add' 
        href="" 
        className="add-tag">+</a>
    </span>
    )
}

export const Tags = ({elem,findTag}) => {
  return (
    <div className="tags-wrapper">
      {elem.tags.map((tag,i) => {
        return (
        <span key={i} className="content-onhover-span">
          <a 
            id='del' 
            href="" 
            className="del-tag">x</a>
          <a 
            onClick={findTag} 
            name={tag} 
            id='tag' 
            href="" 
            className="tag-click">{tag}</a>
        </span>
        )
      })}
  </div>
  )

  
}

export const OrginalLink = ({elem}) => {
  return (
    <span className="content-onhover-span">
      <a 
        id='add' 
        href={elem.src} 
        className="link-tag">{link}</a>
    </span>
    )
}

export const ImageSrc = ({elem}) => {
  return <img className='image-style' src={elem.src} alt=""/> 
}


export const TagInput = ({elem, tagStatus, handleTagChange}) => {
  return (
    <div className="tag-input">
      <input 
        onChange={handleTagChange} 
        className="input" 
        type="text" 
        placeholder="tag:"/>
      <a 
        id={elem.id} 
        name="save" 
        onClick={tagStatus} 
        className="save-input" 
        href="">SAVE</a>
      <a 
        id="cancel"
        onClick={tagStatus} 
        className="cancel-input" 
        href="">CANCEL</a>
    </div>
    )
}