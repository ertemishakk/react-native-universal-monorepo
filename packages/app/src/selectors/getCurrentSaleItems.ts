import { createSelector } from "reselect";

import getCurrentSale from "./getCurrentSale";

export default createSelector(
  [getCurrentSale],
  (currentSale) => currentSale?.items
);
