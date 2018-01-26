import { LOAD_IMAGES, ADD_TAG, ADD_IMAGE, DEL_TAG } from '../actions/imageActions';
import {data} from './data';


const images = (state = [], action) => {

  switch(action.type){
    

    case LOAD_IMAGES:
      return data;
      
    case ADD_TAG:
      let {id,tag} = action.payload;
      let res = data.filter((elem,i) => {
        return elem.id === parseInt(id);
      })
      if(res.length === 0){
        return state;
      }
      else{
        res[0].tags.push(tag);
        return [...data];
    }
    case ADD_IMAGE:
      let x = [...data,action.payload];
      return x;
    case DEL_TAG:
      let index = state.findIndex((elem) => {
       return elem.id === parseInt(action.payload.id);
     });
     let elemTags = data[index].tags;
     let newTags = elemTags.filter((elem) => {
      return !(elem === action.payload.tag);
     })
     data[index].tags = newTags;
     return [...data]; 
    default:
      return state;
  }
}

export default images;