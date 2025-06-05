import {createSlice} from "@reduxjs/toolkit";
import type {Localization} from "../components/project/Project.tsx";

interface ActiveDisplayState {
  currentProject: ProjectInfoBrief | null;
  currentNamespace: string | null;
  currentLocalization: Localization | null;
  currentBranch: string | null;
  isSaved: boolean;
}

interface ProjectInfoBrief {
  id: string;
  name: string;
}

const initialState: ActiveDisplayState = {
  currentProject: null,
  currentNamespace: null,
  currentLocalization: null,
  currentBranch: null,
  isSaved: true,
};

const activeDisplaySlice = createSlice({
  name: "activeDisplay",
  initialState: initialState,
  reducers: {
    changeProject: (_state, action) => {
      return ({
        currentProject: action.payload,
        currentNamespace: null,
        currentLocalization: null,
        currentBranch: null,
        isSaved: true,
      })
    },
    changeNamespace: (state, action) => {
      return ({
        ...state,
        currentNamespace: action.payload,
        currentBranch: null,
      })
    },
    changeLocalization: (state, action) => {
      return ({
        ...state,
        currentLocalization: action.payload,
      })
    },
    changeBranch: (state, action) => {
      return ({
        ...state,
        currentBranch: action.payload,
      })
    }
  }
})


export const {changeProject, changeNamespace, changeLocalization, changeBranch} = activeDisplaySlice.actions;
export default activeDisplaySlice.reducer;