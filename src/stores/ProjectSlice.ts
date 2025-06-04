import { createSlice } from "@reduxjs/toolkit";
import type {Project} from "../components/project/Project.tsx";


const initialState: Project | null = null;

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    switchProject: (_state, action) => {
      return action.payload;
    }
  }
})


export const { switchProject } = projectSlice.actions;
export default projectSlice.reducer;