import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDLE_MODE } from "../screens/IdleScreen";
import { setMode } from "./mode";

const initialState = null as Member | null;

const slice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action: PayloadAction<Member | null>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(setMode, (state, action) => {
      return action.payload === IDLE_MODE ? initialState : state;
    }),
});

export const { setMember } = slice.actions;

export default slice.reducer;
