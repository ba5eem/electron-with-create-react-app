import { LOAD_NOTES } from '../actions/noteActions';
import {noteData} from './data';


const notes = (state = [], action) => {

  switch(action.type){
    

    case LOAD_NOTES:
      return noteData;
 
    default:
      return state;
  }
}

export default notes;