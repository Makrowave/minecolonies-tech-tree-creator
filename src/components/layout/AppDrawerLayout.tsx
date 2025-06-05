import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {ListItemIcon} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Project from "../project/Project.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import AppBar from "./AppBar.tsx";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
  open?: boolean;
}>(({theme}) => ({
  flexGrow: 1,
  display: 'flex',
  flex: 1,
  marginTop: 64,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({open}) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AppDrawerLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const projects = useSelector((state: RootState) => state.projectList);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex', width: '100%', height: '100%'}}>
      <CssBaseline/>
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth}/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography sx={{marginRight: "auto"}} variant={"h6"}>Projects</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {projects.map((project) => (
            <ListItem key={project.id} disablePadding>
              <ListItemButton>
                <ListItemText primary={project.name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Create new"}/>
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader/>
        <Project/>
      </Main>
    </Box>
  );
}