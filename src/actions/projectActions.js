import * as types from './actionTypes'
import ProjectApi from '../api/projectApi'


export function loadProjectsSuccess(projects) {
 return { type: types.LOAD_PROJECTS_SUCCESS, projects }
}

 export function loadProjects() {
  return function (dispatch) {
    return ProjectApi.getAllProjects().then(projects => {
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error)
    })
  }
 }

