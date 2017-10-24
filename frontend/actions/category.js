import * as types from './action-types';
import axios from 'axios'

export function getAllCategory {
  return dispatch => {
    dispatch(getHouseRequest())
    return axios.get('/category')
      .then(response => dispatch(getCategorySuccess(response.data)))
      .catch(errors => dispatch(getCategoryFailure( ex.response.data)))
  }
}

export function getPosts(id) {
  return dispatch => {
    dispatch(getHouseRequest())
    return axios.get('/category' + id)
      .then(response => dispatch(getCategorySuccess(response.data)))
      .catch(errors => dispatch(getCategoryFailure( ex.response.data)))
  }
}

//export function getAllCategory(id) {
//  return dispatch => {
//    dispatch(getHouseRequest())
//    return axios.get('/category')
//      .then(response => dispatch(getCategorySuccess(response.data)))
//      .catch(errors => dispatch(getCategoryFailure( ex.response.data)))
//  }
//}

export const getCategoryRequest = () => ({ type: types.RECEIVE_USER_REQUEST })
export const getCategorySuccess = category => ({ type: types.RECEIVE_USER_SUCCESS, category })
export const getCategoryFailure = errors => ({ type: types.RECEIVE_USER_FAILURE, errors })
