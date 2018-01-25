//const axios = require('axios');

export const LOAD_NOTES = 'LOAD_NOTES';
export const ADD_TAG = 'ADD_TAG';
export const ADD_IMAGE = 'ADD_IMAGE';
export const DEL_TAG = 'DEL_TAG';


export const loadNotes = () => {
  let notes = {}
  return{
    type: LOAD_NOTES,
    payload: notes
  }
}
