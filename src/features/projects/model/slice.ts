import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectsSchema } from "./type";

const initialState: ProjectsSchema = {
  items: [],
};

export const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjectsData: (state, action: PayloadAction<ProjectsSchema>) => {
      state.items = action.payload.items;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: ProjectsActions } = ProjectsSlice;
export const { reducer: ProjectsReducer } = ProjectsSlice;
