import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavbarSchema } from "./types";

const initialState: NavbarSchema = {
  items: [],
};

export const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbar: (state, action: PayloadAction<NavbarSchema>) => {
      state.items = action.payload.items;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: NavbarActions } = NavbarSlice;
export const { reducer: NavbarReducer } = NavbarSlice;
