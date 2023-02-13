import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = null as null | string;

const slice = createSlice({
  name: "headerLogo",
  initialState,
  reducers: {
    setHeaderLogo: (state, action: PayloadAction<string | null>) => {
      return action.payload;
    },
  },
});

export const { setHeaderLogo } = slice.actions;

export default slice.reducer;
