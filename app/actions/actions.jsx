// put actions here

//example
// const axios = require('axios');

// // action generator to change name
// export const changeName = (name) => {
//     return {
//         type: 'CHANGE_NAME',
//         name
//         //the same as name: name
        
//     };
// };

// reducer for fetching location
// export const fetchLocation = () => {

//     return (dispatch, getState) => {
//         // once separated from original file
//     // and contained into its own file
//     // and own folder
//     // and made modular
//     // i.e. app/actions/index.jsx
//     // need redux-thunk to be able to call
//     // store.dispatch()
//     // why do we need this?
//     // because we need to maintain one store
//     // throughout the whole app so we can not
//     // create another store here
// //   store.dispatch(startLocationFetch());

// dispatch(startLocationFetch());
  
//   // use axios for xmlhttprequests
//   axios.get('https://ipinfo.io').then((res) => {
//       // json response in data. we need loc property
//       let loc = res.data.loc;
//       let baseUrl = 'https://maps.google.com?q=';
      
//       dispatch(completeLocationFetch(baseUrl + loc));
      
//   });
//     } 
// };


const ADD = 'ADD';
const STORE = 'STORE';
const ERROR = 'ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const STORAGE_CHANGE = 'STORAGE_CHANGE';
const REMOVE_STORAGE = 'REMOVE_STORAGE';

export const addInput = (input) => {
  return {
    type: ADD,
    input: input
  };
};

export const storeBooks = (arr) => {
  return {
    type: STORE,
    books: arr
  };
};

export const handleError = () => {
  return {
    type: ERROR
  };
};

export const removeError = () => {
  return {
    type: REMOVE_ERROR
  };
};

export const storeLocal = () => {
  return {
    type: STORAGE_CHANGE
  };
};

export const clearLocal = () => {
  return {
    type: REMOVE_STORAGE
  };
};