import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


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
              flex: 1
          }}
          >
            <Box>
              <Typography>{level.title}</Typography>
            </Box>
          </Box>
        ))
      }
    </Box>
  )
}