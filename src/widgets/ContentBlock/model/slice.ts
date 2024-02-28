import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataPageSchema } from "./types";

const initialState: DataPageSchema = {
  visibleContent: false,
  isLoading: true,
  title: "Title",
  text: "Text",
  error: undefined,
};

export const DataPageSlice = createSlice({
  name: "contentPage",
  initialState,
  reducers: {
    onVisible: (state) => {
      state.visibleContent = !state.visibleContent;
    },
    onLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setContent: {
      reducer(state, action: PayloadAction<DataPageSchema, string>) {
        state.title = action.payload.title;
        state.text = action.payload.text;
      },
      prepare(payload: DataPageSchema) {
        return { payload };
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: DataPageActions } = DataPageSlice;
export const { reducer: DataPageReducer } = DataPageSlice;
