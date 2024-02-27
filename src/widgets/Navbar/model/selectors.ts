import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { NavbarSchema } from "./types";

export const getNavbar = (state: StateSchema) => state.navbar;

export const getNavbarItems = createSelector(
  getNavbar,
  (navbar: NavbarSchema) => ({
    items: navbar.items,
  }),
);
