import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDLE_MODE } from "../screens/IdleScreen";
import { SALE_MODE } from "../screens/SaleScreen";

const initialState = SALE_MODE;

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (
      state,
      action: PayloadAction<typeof IDLE_MODE | typeof SALE_MODE>
    ) => {
      return action.payload;
    },
  },
});

export const { setMode } = slice.actions;

export default slice.reducer;
