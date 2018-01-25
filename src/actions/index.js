//const axios = require('axios');

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const ADD_TAG = 'ADD_TAG';


export const loadImages = () => {
  let images = {}
  return{
    type: LOAD_IMAGES,
    payload: images
  }
}

export const addTag = (id,tag) => {
  let local = {
    id: id,
    tag: tag
  }
  return{
    type: ADD_TAG,
    payload: local
  }
}




// export const loadImages = () => {
//   return function(dispatch){
//     return axios.get('/api/areas')
//     .then( areas => {
//       dispatch({
//         type: LOAD_IMAGES,
//         areas: areas.data
//       });
//     });
//   }
// }