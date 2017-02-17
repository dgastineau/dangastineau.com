import * as types from './actionTypes'
import PostApi from '../api/postApi'


export function loadPostsSuccess(posts) {
 return { type: types.LOAD_POSTS_SUCCESS, posts }
}

 export function loadPosts() {
  return function (dispatch) {
    return PostApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error)
    })
  }
 }

