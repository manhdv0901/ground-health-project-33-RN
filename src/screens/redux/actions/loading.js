import { LOADING, SET_SPLASH } from "./types";

export const loading = payload => dispatch => {
     return dispatch({
         type: LOADING,
         payload
     });
};

export const setSplash = payload => dispatch => {
    return dispatch({
        type: SET_SPLASH,
        payload,
    })
}