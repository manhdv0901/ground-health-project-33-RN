import { NAME_DOCTOR, NAME_PATIENT } from "./types";

export const getNamePatient = payload => dispatch => {
    return dispatch({
        type: NAME_PATIENT,
        payload,
    })
}
export const getNameDoctor = payload => dispatch =>{
    return dispatch({
        type: NAME_DOCTOR,
        payload,
    })
}