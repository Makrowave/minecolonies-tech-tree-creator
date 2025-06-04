import type {Technology} from "./Technology.tsx";
import Box from "@mui/material/Box";
import TechnologyGrid from "./TechnologyGrid.tsx";


export interface Project {
  id: string;
  name: string;
  namespaces: Namespace[];
  localizations: Localization[];
}

export interface Namespace {
  name: string;
  technologies: Technology[];
}

export interface Localization {
  id: string;
  name: string;
}

export default function Project() {
  return (
    <Box sx={{display: 'flex', flexGrow: 1}}>
      <TechnologyGrid />
    </Box>
  )
}