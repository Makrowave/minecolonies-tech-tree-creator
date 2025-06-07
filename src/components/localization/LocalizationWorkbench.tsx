import {Box, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import LocalizationInput from "./LocalizationInput.tsx";

export default function LocalizationWorkbench() {
  const project = useSelector((state: RootState) => state.project)
  const activeProject = useSelector((state: RootState) => state.activeProject)
  const activeLocalization = activeProject.currentLocalization
  const localizationKeys = project.localizations.find((l) => l.id === "en_us")!.keys;



  return (
    <Box sx={{display: "flex"}}>
    {
      activeLocalization !== null && (
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                Key
              </TableCell>
              <TableCell>
                Default value (American English)
              </TableCell>
              <TableCell>
                Translated value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Object.entries(localizationKeys).map((k) => (
                <LocalizationInput localizationKey={k[0]} localizationId={activeLocalization.id} />
              ))
            }
          </TableBody>
        </Table>
      )
    }
    </Box>
  )
}