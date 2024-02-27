import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { DataPageSchema } from "./types";

export const getDataPage = (state: StateSchema) => state.content;

export const isLoaderDataPage = createSelector(
  getDataPage,
  (content: DataPageSchema) => content.isLoading,
);

export const getContentDataPage = createSelector(
  getDataPage,
  (content: DataPageSchema) => ({
    title: content.title,
    text: content.text,
  }),
);
