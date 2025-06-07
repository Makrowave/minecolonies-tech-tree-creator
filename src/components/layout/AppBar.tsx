import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import {type Dispatch, type SetStateAction, useMemo} from "react";
import {changeBranch, changeLocalization, changeNamespace} from "../../stores/ActiveDisplaySlice.ts";
import {MenuItem} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import {colors} from "../../const.ts";
import LocalizationModal from "../modal/LocalizationModal.tsx";
import type {Localization} from "../project/Project.tsx";
import ExpandableMenu from "./ExpandableMenu.tsx";
import NamespaceModal from "../modal/NamespaceModal.tsx";
import BranchModal from "../modal/BranchModal.tsx";

type DrawerAppBarProps = {
  open: boolean;
  handleDrawerOpen: () => void;
  drawerWidth: number;
  setCurrentEditor: Dispatch<SetStateAction<"technology" | "effect" | "localization">>;
  currentEditor: "technology" | "effect" | "localization"
}

/**
 *
 * @param open - Is drawer used next to bar open, for resizing
 * @param handleDrawerOpen - Function to open drawer
 * @param drawerWidth - Width of drawer
 * @constructor
 */
export default function AppBar({open, handleDrawerOpen, drawerWidth, setCurrentEditor, currentEditor}: DrawerAppBarProps) {

  const activeProject = useSelector((state: RootState) => state.activeProject);
  const project = useSelector((state: RootState) => state.project);
  const localizationsUsed = useMemo(() => project?.localizations ? project.localizations : [], [project?.localizations]);

  const dispatch = useDispatch();

  const handleLanguageMenuClick = (localization: Localization) => {
    dispatch(changeLocalization(localization));
  }
  const handleNamespaceMenuClick = (namespace: string | null) => {
    dispatch(changeNamespace(namespace))
  }
  const handleBranchMenuClick = (branch: string | null) => {
    dispatch(changeBranch(branch))
  }

  const handleEditorChange = (value: "technology" | "effect" | "localization") => {
    setCurrentEditor(value);
  }


  return (
    <MuiAppBar
      position="fixed"
      sx={{
        bgcolor: colors.purple,
        transition: (theme) =>
          theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ...(open && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: (theme) =>
            theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            ...(open && {display: 'none'}),
          }}
        >
          <MenuIcon/>
        </IconButton>
        <Box sx={{display: "flex", justifyContent: "start", alignItems: "center"}}>
          <Typography variant="h6" noWrap component="div">
            {activeProject.currentProject?.name ?? "New project"}
          </Typography>
          <ExpandableMenu primary={"Editor"} secondary={currentEditor} >
            <MenuItem key={"effect"} onClick={() => handleEditorChange("effect")} selected={currentEditor === "effect"}>
              Effect editor
            </MenuItem>
            <MenuItem key={"technology"} onClick={() => handleEditorChange("technology")} selected={currentEditor === "technology"}>
              Research tree
            </MenuItem>
            <MenuItem key={"localization"} onClick={() => handleEditorChange("localization")} selected={currentEditor === "localization"}>
              Localization editor
            </MenuItem>
          </ExpandableMenu>
        </Box>
        <Box sx={{flexGrow: 1}}/>
        <Box sx={{display: "flex", alignItems: "center"}}>
          <IconButton
            color="inherit"
          >
            <SaveIcon/>
          </IconButton>
          <ExpandableMenu
            primary={"Namespace"}
            secondary={activeProject.currentNamespace ?? "No namespace selected"}
            modal={<NamespaceModal/>}
          >
            {project?.namespaces.map((namespace) => (
              <MenuItem
                key={namespace.name}
                selected={activeProject.currentNamespace === namespace.name}
                onClick={() => {
                  handleNamespaceMenuClick(namespace.name)
                }}
              >
                {namespace.name}
              </MenuItem>
            ))}
          </ExpandableMenu>
          <ExpandableMenu
            primary={"Language"}
            secondary={activeProject.currentLocalization?.name ?? "No localization selected"}
            modal={<LocalizationModal usedLanguages={localizationsUsed}/>}
          >
            {project?.localizations.map((localization) => (
              <MenuItem
                key={localization.id}
                selected={activeProject.currentLocalization?.id === localization.id}
                onClick={() => {
                  handleLanguageMenuClick(localization)
                }}
              >
                {localization.name}
              </MenuItem>
            ))}
          </ExpandableMenu>
          {
            activeProject.currentNamespace &&
            <ExpandableMenu
              primary={"Branch"}
              secondary={activeProject.currentBranch ?? "No branch selected"}
              modal={<BranchModal/>}
            >
              {project?.namespaces.find((n) => n.name === activeProject.currentNamespace)?.branches.map((branch) => (
                <MenuItem
                  key={branch.name}
                  selected={activeProject.currentBranch === branch.name}
                  onClick={() => {
                    handleBranchMenuClick(branch.name)
                  }}
                >
                  {branch.name}
                </MenuItem>
              ))}
            </ExpandableMenu>
          }

        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}