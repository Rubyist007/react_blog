import { combineReducers } from "redux";

import CategoryReducer from './category_reducer';

var reducers = combineReducers({
    categories: CategoryReducer
});

export default reducers;
