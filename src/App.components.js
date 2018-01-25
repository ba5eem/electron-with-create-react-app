import React from 'react';
import { Main, Header, Images, Notes } from './components';




export const RenderImages = ({images}) => {
  return (
      <div className="main wrap">
          {images.map((elem,i) => {
            return (
              <Images key={i}  src={elem}/>
              )
            }) 
          }
        </div>
        )
}