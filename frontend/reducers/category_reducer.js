import * as types from '../actions/action-types';

const initialState = {
  data: [],
  errors: [],
  isFetching: false
};

const category = function(state = initialState, action) {

  switch(action.type) {
    case types.CATEGORY_REQUEST:
      return Object.assign( {}, state, { isFetching: true } )

    case types.GET_CATEGORY_SUCCESS:
      return Object.assign( {}, state, { data: action.category, isFetching: false, errors: [] } )

    case types.POST_CATEGORY_SUCCESS:
      return Object.assign( {}, state, { data: state.data.concat(action.category), isFetching: false, errors: [] } )

    case types.CATEGORY_FAILURE:
      return Object.assign( {}, state, { errors: action.errors, isFetching: false } )
  }
  return state
}

export default category
