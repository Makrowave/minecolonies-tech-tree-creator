import {configureStore} from "@reduxjs/toolkit";
import projectReducer from "./ProjectSlice.ts"
import projectListReducer from "./ProjectListSlice.ts"
import activeDisplaySlice from "./ActiveDisplaySlice.ts";

const store = configureStore({
  reducer: {
    project: projectReducer,
    projectList: projectListReducer,
    activeProject: activeDisplaySlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export default store