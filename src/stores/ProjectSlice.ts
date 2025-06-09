import {createSlice} from "@reduxjs/toolkit";
import type {ProjectType} from "../components/project/Project.tsx";


const initialState: ProjectType = {
  id: "-1",
  name: "New project",
  namespaces: [],
  localizations: [{id: "en_us", name: "American English - English (United States)", keys: {}}],
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
      const namespace = state.namespaces.find((s) => s.name === action.payload.oldName);
      if (namespace) {
        namespace.name = action.payload.newName;
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
    },
    deleteBranch: (state, action) => {
      const namespace = state.namespaces.find((s) => s.name === action.payload.namespace);
      if (namespace) {
        namespace.branches = namespace.branches.filter((s) => s !== action.payload.branch);
      }
    },
    addLocalization: (state, action) => {
      return {
        ...state,
        localizations: [...state.localizations, {...action.payload, keys: {}}],
      };
    },
    deleteLocalization: (state, action) => {
      return {
        ...state,
        localizations: state.localizations.filter((localization) => localization.id !== action.payload),
      };
    },

    addLocalizationKey: (state, action) => {
      const { key, value, localizationId } = action.payload;
      const localization = state.localizations.find((l) => l.id === localizationId);
      if (localization) {
        localization.keys[key] = value;
      } else {
        console.warn(`Localization with ID ${localizationId} not found.`);
      }
    },
    addTechnology: (state, action) => {
      const {namespace, branch, technology, name, subtitle} = action.payload;
      getBranch(state, branch, namespace)?.technologies.push(technology);
      const enUs = state.localizations.find(loc => loc.id === "en_us");
      if (enUs) {
        enUs.keys[technology.name] = name
        enUs.keys[technology.name.slice(0, -4) + "subtitle"] = subtitle
      }
    },

    editTechnology: (state, action) => {
      const {namespace, branch, technology, name, subtitle ,oldNameId} = action.payload;
      const technologies = state.namespaces
        .find((n) => n.name === namespace)!.branches
        .find((b) => b.name === branch)!.technologies

      const index = technologies.findIndex(t => t.name === oldNameId);
      if (index !== -1) {
        technologies.splice(index, 1);
        technologies.push(technology);
      }
      state.localizations.forEach(loc => {
        delete loc.keys[oldNameId]
        delete loc.keys[oldNameId.slice(0, -4) + "subtitle"]
      })
      const enUs = state.localizations.find(loc => loc.id === "en_us");
      if (enUs) {
        enUs.keys[technology.name] = name
        enUs.keys[technology.name.slice(0, -4) + "subtitle"] = subtitle
      }
    },

    deleteTechnology: (state, action) => {
      const {namespace, branch, technology, childrenNames} = action.payload;
      const technologies = getBranch(state, branch, namespace)?.technologies;
      if(technologies && technologies.length > 0) {

        const index = technologies.findIndex(t => t.name === technology.name);
        if (index === -1) {
          return;
        }

        for(const name of childrenNames) {
          const tech = technologies.find((tech) => tech.name === name)
          if(tech) {
            tech.parentResearch = technology.parentResearch;
            tech.researchLevel = technology.parentResearch ? tech.researchLevel : 1;
          }
        }

        technologies.splice(index, 1);
        state.localizations.forEach(loc => {
          delete loc.keys[technology.name]
          delete loc.keys[technology.name.slice(0, -4) + "subtitle"]
        })
      }
    }
  }
})

const getNamespace = (state: ProjectType, namespace: string) => {
  return state.namespaces.find((n) => n.name === namespace)
}

const getBranch = (state: ProjectType, branch: string, namespace: string) => {
  return getNamespace(state, namespace)?.branches.find((b) => b.name === branch);
}
// "parentResearch": "minecolonies:civilian/reflective",
export const {
  switchProject,
  addNamespace,
  renameNamespace,
  deleteNamespace,
  addBranch,
  deleteBranch,
  addLocalization,
  deleteLocalization,
  addLocalizationKey,
  addTechnology,
  editTechnology,
  deleteTechnology
} = projectSlice.actions;
export default projectSlice.reducer;