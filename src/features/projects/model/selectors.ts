import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ProjectsSchema } from "./type";

export const getProjects = (state: StateSchema) => state.projects;

export const getProjectsData = createSelector(
  getProjects,
  (projects: ProjectsSchema) => ({
    items: projects.items,
  }),
);
// export const isLoaderProjects = createSelector(
//   getProjects,
//   (content: ProjectsSchema) => content.isLoading,
// );

// export const isVisibleContent = createSelector(
//   getProjects,
//   (content: ProjectsSchema) => content.visibleContent,
// );
