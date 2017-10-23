import { combineReducers } from "redux";

import CategoryReducer from './category_reducer';

var reducers = combineReducers({
    CagegoryState: CategoryReducer
});

export default reducers;
