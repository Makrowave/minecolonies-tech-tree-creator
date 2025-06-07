import {Paper, Typography} from "@mui/material";
import {colors} from "../../const.ts";


export interface Technology {
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
  technology: Technology
}

export default function Technology ({technology}: TechnologyProps) {


  return (
    <Paper sx={{flex: 1, bgcolor: colors.background, p: 1}} elevation={5}>
      <Typography>{technology.name}</Typography>
      <Typography>{technology.subtitle ?? ""}</Typography>
      <Typography>Effects:</Typography>
    </Paper>
  )
}