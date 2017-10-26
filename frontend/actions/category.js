import * as types from './action-types';
import axios from 'axios'

//let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
//console.log(token)
//axios.defaults.headers.post['X-CSRF-Token'] = token
//axios.defaults.headers.post['Accept'] = 'application/json'
//axios.defaults.headers.post['X-Transaction'] = 'POST Example'
//axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'

//axios.interceptors.request.use(request => {
//  console.log(request)
//  return request
//})

//axios.interceptors.response.use(response => {
//  console.log(response)
//  return response
//})

export function getCategories() {
  return dispatch => {
    dispatch(categoryRequest())
    return axios.get('/category')
      .then(response => dispatch(getCategorySuccess(response.data)))
      .catch(errors => dispatch(categoryFailure( errors.response)))
  }
}

export function createCategory(data) {
  return dispatch => {
    dispatch(categoryRequest())
    return axios.post('/category', data)
      .then(response => dispatch(postCategorySuccess(response.data)),
            errors => dispatch(categoryFailure( errors.response.data)))
  }
}

export const categoryRequest = () => ({ type: types.CATEGORY_REQUEST })
export const getCategorySuccess = category => ({ type: types.GET_CATEGORY_SUCCESS, category })
export const postCategorySuccess = category => ({ type: types.POST_CATEGORY_SUCCESS, category })
export const categoryFailure = errors => ({ type: types.CATEGORY_FAILURE, errors })
