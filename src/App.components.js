import React from 'react';
import { Main, Header, Images, Notes } from './components';




export const RenderImages = ({notFound,tagSearch,deleteTag,addNewImage,addNewTag, images}) => {
  return (
      <div className="main wrap">
          {images.map((elem,i) => {
            return (
              <Images 
                addNewTag={addNewTag}
                addNewImage={addNewImage} 
                deleteTag={deleteTag}
                tagSearch={tagSearch}
                notFound={notFound}
                key={i}  
                src={elem}/>
              )
            }) 
          }
          {notFound ?
            <div className="not-found">This is a live search, as you type your results will appear here...At this time no tags are found that match your search...</div>
            : null }
        </div>
        )
}


export function tagFilter(data,tag){
  let images = [];
    let idx = [];
    data.map((elem,i) => {
      elem.tags.filter(elem => {
        if(elem === tag){
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