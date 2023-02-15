import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDLE_MODE } from "../screens/IdleScreen";
import { setMode } from "./mode";

const initialState = null as GiftCard | null;

const slice = createSlice({
  name: "giftcard",
  initialState,
  reducers: {
    setGiftcard: (state, action: PayloadAction<GiftCard | null>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(setMode, (state, action) => {
      return action.payload === IDLE_MODE ? initialState : state;
    }),
});

export const { setGiftcard } = slice.actions;

export default slice.reducer;
