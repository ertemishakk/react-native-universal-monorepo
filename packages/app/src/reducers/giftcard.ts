import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = null as GiftCard | null;

const slice = createSlice({
  name: "giftcard",
  initialState,
  reducers: {
    setGiftcard: (state, action: PayloadAction<GiftCard | null>) => {
      return action.payload;
    },
  },
});

export const { setGiftcard } = slice.actions;

export default slice.reducer;
