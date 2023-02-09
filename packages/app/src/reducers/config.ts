import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 1;

const slice = createSlice({
  name: "testConfig",
  initialState,
  reducers: {
    setConfig(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export const { setConfig } = slice.actions;

export default slice.reducer;
