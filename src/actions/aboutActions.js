import * as types from './actionTypes'
import AboutApi from '../api/aboutApi'


export function loadAboutSuccess(about) {
 return { type: types.LOAD_ABOUT_SUCCESS, about }
}

 export function loadAbout() {
  return function (dispatch) {
    return AboutApi.getAbout().then(about => {
      dispatch(loadAboutSuccess(about));
    }).catch(error => {
      throw(error)
    })
  }
 }

