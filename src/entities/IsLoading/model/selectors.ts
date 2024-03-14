import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { IsLoadingSchema } from "./types";

export const getDataPage = (state: StateSchema) => state.loading;

export const isLoader = createSelector(
  getDataPage,
  (loading: IsLoadingSchema) => loading.isLoading,
);
