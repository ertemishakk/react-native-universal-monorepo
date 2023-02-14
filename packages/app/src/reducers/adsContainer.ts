import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = null as Layout | null;

const slice = createSlice({
  name: "adsContainer",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<Layout | null>) => {
      return action.payload;
    },
  },
});

export const { setLayout } = slice.actions;

export default slice.reducer;
