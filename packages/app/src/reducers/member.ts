import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = null as Member | null;

const slice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action: PayloadAction<Member | null>) => {
      return action.payload;
    },
  },
});

export const { setMember } = slice.actions;

export default slice.reducer;
