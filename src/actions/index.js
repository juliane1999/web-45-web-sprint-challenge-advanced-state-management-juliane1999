import axios from 'axios';

    
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const fetchSmurfs = ()=> {
    return({type: FETCH_SMURFS});
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (smurfs)=> {
    return({type: FETCH_SUCCESS, payload: smurfs});
}

export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error});
}

    
export const ADD_SMURF = 'ADD_SMURF';
export const addSmurf = ()=> {
    return({type: ADD_SMURF});
}

export const ADD_ERROR = 'ADD_ERROR';
export const addError = ()=> {
    return({type: ADD_ERROR });
}





//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.