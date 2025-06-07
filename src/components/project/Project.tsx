import type {Technology} from "./Technology.tsx";
import Box from "@mui/material/Box";
import TechnologyGrid from "./TechnologyGrid.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";


export interface ProjectType {
  id: string;
  name: string;
  namespaces: Namespace[];
  localizations: FullLocalization[];
}

export interface Namespace {
  name: string;
  branches: string[];
  technologies: Technology[];
}

export interface Localization {
  id: string;
  name: string;
}

export type FullLocalization = {
  keys: {[key: string]: string | undefined}; //key dictionary
} & Localization;

export default function Project() {

  const activeProject = useSelector((state: RootState) => state.activeProject);

  return (
    <Box sx={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
      {
        activeProject.currentNamespace && activeProject.currentBranch &&
        <TechnologyGrid/>
      }
      {
        !activeProject.currentNamespace &&
        <Box>
          No namespace selected - create or select a namespaces for your files!
        </Box>
      }
      {
        !activeProject.currentBranch &&
        <Box>
          No research branch selected - create or select a branch for your researches!
        </Box>
      }

    </Box>
  )
}