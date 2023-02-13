import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDLE_MODE } from "../screens/Idle";
import { SALE_MODE } from "../screens/Sale";

const initialState = IDLE_MODE;

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
