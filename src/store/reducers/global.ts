import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGlobalReducer } from "@Types/store/store";
import { getLocalTime } from "@Utils/getLocalTime";
import { ICharsList } from "components/enter/login";

const initialState: IGlobalReducer = {
  // Debug mode
  debugMode: true,
  // Regular state
  stage: "enter",
  playerInfo: {
    charPrice: 0,
    email: null,
    charsInfo: [],
  },
  time: getLocalTime(),
};

export const globalReducer = createSlice({
  name: "GLOBAL",
  initialState,
  reducers: {
    CHANGE_CURRENT_STAGE(
      state,
      action: PayloadAction<"enter" | "chars" | "create">
    ) {
      state.stage = action.payload;
    },
    FINISH_ENTER(
      state,
      action: PayloadAction<{
        email: string;
        chars: ICharsList[];
        price: number;
      }>
    ) {
      state.stage = "chars";
      state.playerInfo.email = action.payload.email;
      state.playerInfo.charPrice = action.payload.price;
      state.playerInfo.charsInfo = action.payload.chars;
    },
  },
});
