import {createSlice} from "@reduxjs/toolkit";
import type {ProjectType} from "../components/project/Project.tsx";
import {sampleProjects} from "../data/projects.ts";


const initialState: ProjectType[] = sampleProjects;

export interface ProjectListState {
  projectList: ProjectType[];
}

const projectListSlice = createSlice({
  name: "projectList",
  initialState: initialState,
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    }
  }
})


export const {addProject, deleteProject} = projectListSlice.actions;
export default projectListSlice.reducer;