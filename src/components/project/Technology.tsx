import {Paper, Typography} from "@mui/material";
import {colors} from "../../const.ts";
import {forwardRef} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";


export interface TechnologyType {
  name: string;
  branch: string;
  costs?: (ItemCost|TagCost)[];
  effects: Effect[];
  icon: string;
  requirements?: Requirement[];
  noReset?: boolean;
  parentResearch?: string;
  researchLevel: number;
  exclusiveChildResearch?: boolean;
  subtitle?: string;
  sortOrder?: number;
  autostart?: boolean;
  hidden?: boolean;
  instant?: boolean;
  "no-reset"?: boolean;
}

export interface ItemCost {
  type?: "minecolonies:item_simple";
  item: string;
  count: number;
}

export interface TagCost {
  tag: string;
  count: number;
}

export interface Effect {
  id: string;
  level: number;
}

export type Requirement = BuildingRequirement | MandatoryBuildingRequirement

interface BuildingRequirement {
  type: "minecolonies:building"
  building: string;
  level: number;
}

interface MandatoryBuildingRequirement {
  type: "minecolonies:mandatory-building";
  "mandatory-building": string;
  level: number;
}


type TechnologyProps = {
  technology: TechnologyType
}

const Technology = forwardRef<HTMLDivElement, TechnologyProps>(
  ({technology}, ref) => {


    const project = useSelector((state: RootState) => state.project)
    const activeProject = useSelector((state: RootState) => state.activeProject)

    const localization = project.localizations.find((loc) => loc.id === activeProject.currentLocalization?.id);
    console.log(localization?.keys[technology.name])
    console.log(technology.name)

    return (
      <Paper ref={ref} sx={{bgcolor: colors.background, p: 1, height: "150px", width: "400px"}} elevation={5}>
        <Typography>{localization?.keys[technology.name] ?? technology.name}</Typography>
        <Typography>{localization?.keys[technology.subtitle ?? ""] ?? technology.subtitle ?? ""}</Typography>
        <Typography>Effects:</Typography>
      </Paper>
    )
  }
)

export default Technology