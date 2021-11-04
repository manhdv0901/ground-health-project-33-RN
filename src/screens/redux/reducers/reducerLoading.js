import {LOADING, SET_SPLASH} from '../actions/types';

const initialState = {
  isLoad: false,
  isSplash: true,
};

export default function reducerLoading(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoad: action.payload,
      };
    case SET_SPLASH:
      return {
        ...state,
        isSplash: action.payload,
      };
    default:
      return state;
  }
}
