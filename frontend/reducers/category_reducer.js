import * as types from '../actions/action-types';

const initialState = {
  data: [],
  errors: [],
  isFetching: false
};

const category = function(state = initialState, action) {

  switch(action.type) {
    case types.RECEIVE_USER_REQUEST:
      return Object.assign( {}, state, { isFetching: true } )

    case types.RECEIVE_USER_SUCCESS:
      return Object.assign( {}, state, { data: action.category, isFetching: false } )

    case types.RECEIVE_USER_FAILURE:
      return Object.assign( {}, state, { errors: action.errors, isFetching: false } )
  }
  return state
}

export default category
