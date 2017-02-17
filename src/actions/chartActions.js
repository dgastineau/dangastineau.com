import * as types from './actionTypes'
import ChartApi from '../api/chartApi'


export function loadChartsSuccess(charts) {
 return { type: types.LOAD_CHARTS_SUCCESS, charts }
}

 export function loadCharts() {
  return function (dispatch) {
    return ChartApi.getAllCharts().then(charts => {
      dispatch(loadChartsSuccess(charts));
    }).catch(error => {
      throw(error)
    })
  }
 }

