import { combineReducers, AnyAction, Reducer } from "redux";
import lodash from "lodash";
import config from "./config";
import mode from "./mode";

const PERSIST = {
  config,
};

const rootReducer: Reducer<PromoPlayer, AnyAction> = combineReducers({
  ...PERSIST,
  mode,
});

export const PERSIST_KEYS = lodash.keys(PERSIST);

export default rootReducer;
