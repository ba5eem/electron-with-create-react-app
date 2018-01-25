import React from 'react';
import { Main, Header, Images, Notes } from './components';




export const RenderImages = ({deleteTag,addNewImage,addNewTag, images}) => {
  return (
      <div className="main wrap">
          {images.map((elem,i) => {
            return (
              <Images 
                addNewTag={addNewTag}
                addNewImage={addNewImage} 
                deleteTag={deleteTag}
                key={i}  
                src={elem}/>
              )
            }) 
          }
        </div>
        )
}