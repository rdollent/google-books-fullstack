// put reducers here

// action generators
// action generators take all the parameters you need to generate and action
// and returns the object
///example reducer////////////////////////////
// export const nameReducer = (state = 'Anonymous', action) => {
//     switch(action.type) {
//       case 'CHANGE_NAME':
//         return action.name;
//       default:
//         return state;
//     }
// };

export const inputReducer = (state = {input: ''}, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                input: action.input
            };
        default:
            return state;
    }
};

export const bookReducer = (state = {books: []}, action) => {
    switch(action.type) {
        case 'STORE':
            return {
                books: action.books
            };
        default:
            return state;
    }
};

export const errorReducer = (state = '', action) => {
    switch(action.type) {
        case 'ERROR':
            return "Please try again";
        case 'REMOVE_ERROR':
            return '';
        default:
            return state;
    }
};

export const storageReducer = (state = '', action) => {
    switch(action.type) {
        case 'STORAGE_CHANGE':
            return 'Storage changed!';
        case 'REMOVE_STORAGE':
            return '';
        default:
            return state;
    }
};