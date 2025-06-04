import { createSlice } from "@reduxjs/toolkit";
import type {Project} from "../components/project/Project.tsx";


const initialState: Project[] = [];

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


export const { addProject, deleteProject } = projectListSlice.actions;
export default projectListSlice.reducer;