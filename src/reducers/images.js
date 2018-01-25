import { LOAD_IMAGES, ADD_TAG, ADD_IMAGE } from '../actions';
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
    default:
      return state;
  }
}

export default images;