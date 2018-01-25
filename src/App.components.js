import React from 'react';
import { Main, Header, Images, Notes } from './components';




export const RenderImages = ({tagSearch,deleteTag,addNewImage,addNewTag, images}) => {
  return (
      <div className="main wrap">
          {images.map((elem,i) => {
            return (
              <Images 
                addNewTag={addNewTag}
                addNewImage={addNewImage} 
                deleteTag={deleteTag}
                tagSearch={tagSearch}
                key={i}  
                src={elem}/>
              )
            }) 
          }
        </div>
        )
}


export function tagFilter(data,tag){
  let images = [];
    let idx = [];
    data.map((elem,i) => {
      elem.tags.filter(elem => {
        if(elem === tag){
          console.log(i);
          idx.push(i);
        }
      })
    })
    if(tag !== undefined){
        idx.map(i => {
        images.push(data[i])
      })
    }
    else{
      images = data;
    }
    return images;
}