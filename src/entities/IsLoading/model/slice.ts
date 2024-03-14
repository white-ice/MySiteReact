import { createSlice } from "@reduxjs/toolkit";
import { IsLoadingSchema } from "./types";

const initialState: IsLoadingSchema = {
  isLoading: true,
};

export const LoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    onLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: LoadingActions } = LoadingSlice;
export const { reducer: LoadingReducer } = LoadingSlice;
