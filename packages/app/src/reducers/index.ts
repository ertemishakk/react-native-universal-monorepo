import { combineReducers, AnyAction, Reducer } from "redux";
import lodash from "lodash";
import posts from "./posts";

const PERSIST = {

};

const rootReducer: Reducer<FrontEndState, AnyAction> = combineReducers({
  posts,
  ...PERSIST,

});

export const PERSIST_KEYS = lodash.keys(PERSIST);

export default rootReducer;
