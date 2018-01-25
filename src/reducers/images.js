import { LOAD_IMAGES, ADD_TAG } from '../actions';
import {data} from './data';


const images = (state = [], action) => {

  switch(action.type){

    case LOAD_IMAGES:
      return data;
    case ADD_TAG:
    console.log(action.payload);
      let res = data.map((elem,i) => {
        if(elem.id === parseInt(action.payload.id)){
          elem.tags.push(action.payload.tag);
        }
        return data;
      })
      return data;
    default:
      return state;
  }
}

export default images;