import {ID_PATIENT_LOGIN, ID_DOCTOR_LOGIN} from '../actions/types';

const initialState = {id: 0};

export default function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case ID_PATIENT_LOGIN:
      return {
        ...state,
        id: action.payload,
      };

    case ID_DOCTOR_LOGIN:
      return {
        ...state,
        id: action.payload,
      };
    default: {
      return state;
    }
  }
}
