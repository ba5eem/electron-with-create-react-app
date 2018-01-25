//const axios = require('axios');

export const LOAD_IMAGES = 'LOAD_IMAGES';



export const loadImages = () => {
  let images = {}
  return{
    type: LOAD_IMAGES,
    payload: images
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