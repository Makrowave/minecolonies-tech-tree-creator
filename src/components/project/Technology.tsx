import { Typography } from "@mui/material";
import Box from "@mui/material/Box";


export interface Technology {
  name: string;
  branch: string;
  costs: [ItemCost];
  effects: [Effect];
  icon: string;
  requirements: [Requirement];
  noReset?: boolean;
  parentResearch?: "string";
  researchLevel: number;
  subtitle: string;
}

export interface ItemCost {
  type: "minecolonies:item_simple";
  item: string;
  quantity: number;
}

export interface Effect {
  id: string;
  level: number;
}

export interface Requirement {
  type: "minecolonies:building";
  building: string;
  level: number;
}

export default function Technology (technology: Technology) {


  return (
    <Box sx={{flex: 1}}>
      <Typography>{technology.name}</Typography>
    </Box>
  )
}