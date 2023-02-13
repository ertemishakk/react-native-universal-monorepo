import { combineReducers, AnyAction, Reducer } from "redux";
import headerLogo from "./headerLogo";
import headerTitle from "./headerTitle";

const config: Reducer<ConfigState, AnyAction> = combineReducers({
  headerLogo,
  headerTitle,
});

export default config;
