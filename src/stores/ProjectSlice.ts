import {createSlice} from "@reduxjs/toolkit";
import type {ProjectType} from "../components/project/Project.tsx";


const initialState: ProjectType = {
  id: "-1",
  name: "New project",
  namespaces: [],
  localizations: [{id: "en_us", name: "American English - English (United States)"}],
}

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    switchProject: (_state, action) => {
      return action.payload;
    },
    addNamespace: (state, action) => {
      return {
        ...state,
        namespaces: [...state.namespaces, {name: action.payload, technologies: [], branches: []}],
      };
    },
    renameNamespace: (state, action) => {
      const oldNamespace = state.namespaces.find((s) => s.name === action.payload.oldName)!;
      const namespaces = state.namespaces.filter((s) => s.name !== action.payload.oldName);
      return {
        ...state,
        namespaces: [...namespaces, {...oldNamespace, name: action.payload.newName}],
      }
    },
    deleteNamespace: (state, action) => {
      return {
        ...state,
        namespaces: state.namespaces.filter((namespace) => namespace.name !== action.payload),
      };
    },
    addBranch: (state, action) => {
      const namespace = state.namespaces.find((s) => s.name === action.payload.namespace)!;
      namespace.branches.push(action.payload.branch);

      return {
        ...state,
        namespaces: [...state.namespaces.filter((s) => s.name !== action.payload.namespace), namespace],
      }
    },
    deleteBranch: (state, action) => {
      const namespace = state.namespaces.find((s) => s.name === action.payload.namespace)!;
      namespace.branches = namespace.branches.filter((s) => s !== action.payload.branch);
      namespace.technologies = namespace.technologies.filter((s) => s.branch !== action.payload.branch);

      return {
        ...state,
        namespaces: [...state.namespaces.filter((s) => s.name !== action.payload.namespace), namespace],
      }
    },

    addLocalization: (state, action) => {
      return {
        ...state,
        localizations: [...state.localizations, action.payload],
      };
    },
    deleteLocalization: (state, action) => {
      return {
        ...state,
        localizations: state.localizations.filter((localization) => localization.id !== action.payload),
      };
    },
    moveToNamespace: (state, action) => {
      const fromNamespace = state.namespaces.find((namespace) => namespace.name === action.payload.from)!;
      const toNamespace = state.namespaces.find((namespace) => namespace.name === action.payload.to)!;
      const techIndex = fromNamespace.technologies.findIndex((tech) => tech.name === action.payload.technology)!;
      const technology = fromNamespace.technologies.splice(techIndex, 1)[0]

      toNamespace.technologies.push(technology)

      const namespaces = state.namespaces.filter((namespace) => namespace.name !== action.payload.from && namespace.name !== action.payload.to)
      return {
        ...state,
        namespaces: [...namespaces, fromNamespace, toNamespace],
      }
    },
  }
})

export const {
  switchProject,
  addNamespace,
  renameNamespace,
  deleteNamespace,
  addBranch,
  deleteBranch,
  addLocalization,
  deleteLocalization,
  moveToNamespace
} = projectSlice.actions;
export default projectSlice.reducer;