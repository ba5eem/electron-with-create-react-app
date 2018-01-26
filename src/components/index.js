import React from 'react';
import Header from './Header/Header.js';
import Frame from './Frame/Frame.js';



const tagFilter = (data,tag) => {
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

const NotFound = () => {
  return <div className="not-found">This is a live search, as you type your results will appear here...At this time no tags are found that match your search...cant find what your looking for, click Home to go back</div>
}









export { Header, Frame, tagFilter, NotFound };

