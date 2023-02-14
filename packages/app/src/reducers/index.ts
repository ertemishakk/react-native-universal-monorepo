import { combineReducers, AnyAction, Reducer } from "redux";
import lodash from "lodash";
import config from "./config";
import mode from "./mode";
import member from "./member";
import adsContainer from "./adsContainer";
import giftcard from "./giftcard";

const PERSIST = {
  config,
};

const rootReducer: Reducer<PromoPlayer, AnyAction> = combineReducers({
  ...PERSIST,
  mode,
  member,
  adsContainer,
  giftcard,
});

export const PERSIST_KEYS = lodash.keys(PERSIST);

export default rootReducer;
