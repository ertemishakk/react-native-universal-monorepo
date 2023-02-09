import { combineReducers, AnyAction, Reducer } from "redux";
import lodash from "lodash";
import config from "./config";

const PERSIST = {
  config,
};

const rootReducer: Reducer<any, AnyAction> = combineReducers({
  ...PERSIST,
});

export const PERSIST_KEYS = lodash.keys(PERSIST);

export default rootReducer;
