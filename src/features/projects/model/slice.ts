import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectData, ProjectsSchema } from "./type";

const initialState: ProjectsSchema = {
  items: [],
  isLoading: true,
};

export const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjectsData: (state, action: PayloadAction<ProjectData[]>) => {
      state.items = action.payload;
    },
    onLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: ProjectsActions } = ProjectsSlice;
export const { reducer: ProjectsReducer } = ProjectsSlice;
