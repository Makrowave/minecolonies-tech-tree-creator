import {Box, IconButton, List, ListItem, Paper, Tooltip, Typography} from "@mui/material";
import {colors} from "../../const.ts";
import {forwardRef} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import ListItemText from "@mui/material/ListItemText";
import CallSplitIcon from '@mui/icons-material/CallSplit';
import LockResetIcon from '@mui/icons-material/LockReset';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FastForwardIcon from '@mui/icons-material/FastForward';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import CreateIcon from '@mui/icons-material/Create';
import MaterialModal from "../modal/MaterialModal.tsx";
import TechnologyModal from "../modal/TechnologyModal.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import type {TechnologyNode} from "./TechnologyGrid.tsx";
import DeleteTechnologyModal from "../modal/DeleteTechnologyModal.tsx";
export interface TechnologyType {
  name: string;
  branch: string;
  costs?: (ItemCost|TagCost)[];
  effects: Effect[];
  icon: string;
  requirements?: Requirement[];
  parentResearch?: string;
  researchLevel: number;
  subtitle?: string;
  sortOrder?: number;
  exclusiveChildResearch?: boolean;
  autostart?: boolean;
  hidden?: boolean;
  instant?: boolean;
  "no-reset"?: boolean;
  custom?: boolean;
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
  name: string;
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
  technologyNode: TechnologyNode
  redrawArrows?: () => void
}

const Technology = forwardRef<HTMLDivElement, TechnologyProps>(
  ({technologyNode, redrawArrows}, ref) => {


    const project = useSelector((state: RootState) => state.project)
    const activeProject = useSelector((state: RootState) => state.activeProject)

    const localization = project.localizations.find((loc) => loc.id === activeProject.currentLocalization?.id);

    const technology = technologyNode.value
    const parent = technologyNode.parent?.value
    const children = technologyNode.children

    return (
      <Paper
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: colors.background,
          p: 1,
          height: "250px",
          width: "400px",
          opacity: technology.custom ? 1 : 0.7,
        }}
        elevation={5}>
        <Box>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Typography variant={"h6"}>{localization?.keys[technology.name] ?? technology.name}</Typography>
            <Box sx={{display: "flex", alignItems: "center"}}>
            <MaterialModal
              button={(
                <IconButton>
                  <CreateIcon sx={{color: colors.purple}} />
                </IconButton>
              )}
              label={"Edit technology"}
            >
              <TechnologyModal tech={technology} editMode parentInfo={parent ? {name: parent.name, level: parent.researchLevel} : undefined}/>
            </MaterialModal>
              <MaterialModal
                button={(
                  <IconButton>
                    <DeleteIcon color={"error"}/>
                  </IconButton>
                )}
                label={"Delete technology"}
              >
                <DeleteTechnologyModal technology={technology} techChildren={children.map(child => child.value)} redrawArrows={redrawArrows} />
              </MaterialModal>
            </Box>
          </Box>
          <Typography>{localization?.keys[technology.subtitle ?? ""] ?? technology.subtitle ?? ""}</Typography>
          <Typography>Effects:</Typography>
          <List>
            { technology.effects.map((effect) => {
              const name = effect.name
              return (
                <ListItem>
                  <ListItemText>
                    {localization?.keys[name] ?? name}
                  </ListItemText>
                </ListItem>
              )
            })
            }

          </List>
        </Box>
        <Box sx={{display: "flex", alignItems: "center"}}>
          {technology.instant && (<Tooltip title={"Instant"}><HourglassDisabledIcon /></Tooltip>)}
          {technology.autostart && (<Tooltip title={"Auto-start"}><FastForwardIcon /></Tooltip>)}
          {technology.hidden && (<Tooltip title={"Hidden"}><VisibilityOffIcon /></Tooltip>)}
          {technology["no-reset"] && (<Tooltip title={"No reset"}><LockResetIcon /></Tooltip>)}
          {technology.exclusiveChildResearch && (<Tooltip title={"Exclusive child research - pick only one"}><CallSplitIcon sx={{color: "darkred"}} /></Tooltip>)}
        </Box>
      </Paper>
    )
  }
)

export default Technology