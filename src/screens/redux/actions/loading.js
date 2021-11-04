import { LOADING } from "./types";

export const loading = payload => dispatch => {
     return dispatch({
         type: LOADING,
         payload
     });
};