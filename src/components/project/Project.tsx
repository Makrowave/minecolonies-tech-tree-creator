import type {TechnologyType} from "./Technology.tsx";
import Box from "@mui/material/Box";
import TechnologyGrid from "./TechnologyGrid.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import LocalizationWorkbench from "../localization/LocalizationWorkbench.tsx";


export interface ProjectType {
  id: string;
  name: string;
  namespaces: Namespace[];
  localizations: FullLocalization[];
}

export interface Namespace {
  name: string;
  branches: Branch[];
}

export interface Branch {
  name: string;
  technologies: TechnologyType[];
}

export interface Localization {
  id: string;
  name: string;
}

export type FullLocalization = {
  keys: {[key: string]: string | undefined}; //key dictionary
} & Localization;


type ProjectProps = {
  currentEditor: "effect" | "localization" | "technology";
}

export default function Project({currentEditor}: ProjectProps) {

  const activeProject = useSelector((state: RootState) => state.activeProject);

  if(currentEditor === "technology") {
    return (
      <Box sx={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
        {
          activeProject.currentNamespace && activeProject.currentBranch &&
          <TechnologyGrid />
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
  if(currentEditor === "localization") {
    return (
      <LocalizationWorkbench />
    )
  }

  return <></>




}