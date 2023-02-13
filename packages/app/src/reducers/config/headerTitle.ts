import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = null as null | string;

const slice = createSlice({
  name: "headerTitle",
  initialState,
  reducers: {
    setHeaderTitle: (state, action: PayloadAction<string | null>) => {
      return action.payload;
    },
  },
});

export const { setHeaderTitle } = slice.actions;

export default slice.reducer;
