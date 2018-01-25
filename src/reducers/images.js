import { LOAD_IMAGES, ADD_TAG, ADD_IMAGE, DEL_TAG } from '../actions';
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
      let y = data.filter((elem, i) => {
        return elem.id === parseInt(action.payload.id);
      })
      let tags = y[0].tags;
      let arr;
      for(var i = 0; i < tags.length; i++){
        if(tags[i] === action.payload.tag){
          let idx = tags[i];
          arr = tags.slice(idx,tags.length);
        }
      }

      console.log(arr);




      
    default:
      return state;
  }
}

export default images;