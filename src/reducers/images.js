import { LOAD_IMAGES } from '../actions';
import {data} from './data';


const images = (state = [], action) => {

  switch(action.type){

    case LOAD_IMAGES:
      return data;
    default:
      return state;
  }
}

export default images;