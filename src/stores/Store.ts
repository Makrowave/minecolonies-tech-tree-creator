import {configureStore} from "@reduxjs/toolkit";
import projectReducer from "./ProjectSlice.ts"

const store = configureStore({
  reducer: {
    project: projectReducer,
  },
})

export default store