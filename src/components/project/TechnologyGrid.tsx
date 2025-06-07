import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import {useMemo} from "react";
import Technology from "./Technology.tsx";


const cols = [
  {
    researchLevel: 1,
    title: "Level 1 (0.5hr)"
  },
  {
    researchLevel: 2,
    title: "Level 2 (1hr)"
  },
  {
    researchLevel: 3,
    title: "Level 3 (2hr)"
  },
  {
    researchLevel: 4,
    title: "Level 4 (4hr)"
  },
  {
    researchLevel: 5,
    title: "Level 5 (8hr)"
  },
  {
    researchLevel: 6,
    title: "Level 5 (16hr)"
  },
]


export default function TechnologyGrid() {

  const project = useSelector((state: RootState) => state.project)
  const activeProject = useSelector((state: RootState) => state.activeProject)


  const technologies = useMemo(() => (project.namespaces.find((n) => n.name === activeProject.currentNamespace)?.branches.find((b) => b.name === activeProject.currentBranch)?.technologies || []), [activeProject.currentBranch, project.namespaces])
  return (
    <Box sx={{display: 'flex', flexGrow: 1}}>
      {
        cols.map((level, index) => (
          <Box
            key={level.researchLevel}
            sx={{
              borderRight: index === cols.length -1 ? "" : "1px solid gray",
              px: "10px",
              display: "flex",
              flexDirection: "column",
              justifyItems: "start",
              flex: 1,
              gap: 4
          }}
          >
            <Box>
              <Typography>{level.title}</Typography>
            </Box>
            {
              technologies.filter((t) => t.researchLevel === level.researchLevel).map((t) => (
                <Technology technology={t}/>
              ))
            }
          </Box>
        ))
      }
    </Box>
  )
}