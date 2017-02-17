import * as types from '../actions/actionTypes'
import initialState from './initialState'


export default function aboutReducer(state = initialState.about, action) {
  switch(action.type) {
    case types.LOAD_ABOUT_SUCCESS:
      return action.about;

    default:
      return state;
  }
}
