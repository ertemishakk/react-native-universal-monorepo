import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDLE_MODE } from "../screens/IdleScreen";
import { setMode } from "./mode";

const initialState = null as CurrentSale | null;

const slice = createSlice({
  name: "currentSale",
  initialState,
  reducers: {
    setCurrentSale: (state, action: PayloadAction<CurrentSale | null>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(setMode, (state, action) => {
      return action.payload === IDLE_MODE ? initialState : state;
    }),
});

export const { setCurrentSale } = slice.actions;

export default slice.reducer;
