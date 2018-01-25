import React from 'react';

export const TagOverlay = ({obj}) => {
  return (
    <div className="tag-overlay">
      <a id='new' href="" className="tag-new">+</a>
      
      {obj.tags.map((elem,i) => {
        return (
          <span key={i} className="tag-container">
            <a name={obj.id} title={elem} id='del' href="" className="del-tag">x</a>
            <a id='tag' href="" className="tag-click">{elem}</a>
          </span>
          )
      })}
      <br/>
      <a id='close' href="" className="tag-close">close</a>

    </div>
    )
}

export const AddNewTagOverlay = ({obj,addNewTag,handleTag}) => {
  return (
    <div className="add-overlay">
      <br/>
      <form>
        <input 
          type="text" 
          className="add-tag-input"
          onChange={handleTag} 
          placeholder="tag:"/>
        <br/>
        <input 
          onClick={addNewTag} 
          id='cancel' 
          type="button" 
          className="add-tag-button" 
          value="nah"/>
        <span className="add-tag-span">....</span>
        <input 
          type="submit" 
          id='add'
          name={obj.id} 
          onClick={addNewTag}
          className="add-tag-button" 
          value="add"/>
      </form>
    </div>
    )
}

export const AddNewImageUrl = ({obj,addNewImage,handleImgUrl}) => {
  return (
    <div className="add-overlay">
      <br/>
      <form>
        <input 
          type="text" 
          className="add-tag-input"
          onChange={handleImgUrl} 
          placeholder="url:"/>
        <br/>
        <input 
          onClick={addNewImage} 
          id='cancel' 
          type="button" 
          className="add-tag-button" 
          value="nah"/>
        <span className="add-tag-span">....</span>
        <input 
          type="submit" 
          id='add'
          name={obj.id} 
          onClick={addNewImage}
          className="add-tag-button" 
          value="add"/>
      </form>
    </div>
    )
}