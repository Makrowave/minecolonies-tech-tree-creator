import {createSlice} from "@reduxjs/toolkit";
import type {Localization} from "../components/project/Project.tsx";
import {localizations} from "../const.ts";

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
        currentProject: {name: action.payload.name, id: action.payload.id} as ProjectInfoBrief,
        currentNamespace: action.payload.namespaces[0]?.name ?? null,
        currentLocalization: localizations[26],
        currentBranch: action.payload.namespaces[0]?.branches[0]?.name ?? null,
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