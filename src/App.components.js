import React from 'react';
import { Main, Header, Images, Notes } from './components';




export const RenderImages = ({addNewTag, images}) => {
  return (
      <div className="main wrap">
          {images.map((elem,i) => {
            return (
              <Images addNewTag={addNewTag} key={i}  src={elem}/>
              )
            }) 
          }
        </div>
        )
}