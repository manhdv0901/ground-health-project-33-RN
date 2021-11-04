import {NAME_DOCTOR, NAME_PATIENT} from '../actions/types';

const initialState = {name: ''};

export default function reducerNameUser(state = initialState, action) {
  switch (action.type) {
    case NAME_PATIENT:
      return {
        ...state,
        name: action.payload,
      };
    case NAME_DOCTOR:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
