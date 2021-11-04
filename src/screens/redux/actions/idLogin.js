import { ID_PATIENT_LOGIN, ID_DOCTOR_LOGIN } from "./types";

export const getIdPatient = payload => dispatch => {
    console.log('payload: ', payload);
    return dispatch ({
        type: ID_PATIENT_LOGIN,
        payload
        
    })
}
export const getIdDoctor = payload => dispatch => {
    return dispatch ({
        type: ID_DOCTOR_LOGIN,
        payload
    })
}