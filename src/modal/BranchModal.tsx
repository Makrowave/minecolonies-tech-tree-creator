import type {ModalBody} from "./MaterialModal.tsx";
import Box from "@mui/material/Box";
import {useMemo, useState} from "react";
import {colors} from "../const.ts";
import {Button, TextField} from "@mui/material";
import {useSelector} from "react-redux";
import type {RootState} from "../stores/Store.ts";
import Typography from "@mui/material/Typography";

export default function BranchModal({closeModal}: ModalBody) {
  const [branch, setBranch] = useState<string>("");
  const project = useSelector((state: RootState) => state.project);
  const activeInfo = useSelector((state: RootState) => state.activeProject);
  const branches = useMemo(() => project.namespaces.find((namespace) => namespace.name === activeInfo.currentNamespace)!.branches, [project, activeInfo]);

  const handleAddBranch = () => {
    if (closeModal) {
      closeModal();
    }
  }
  return (
    <Box>
      <TextField
        value={branch}
        onChange={(e) => {
          setBranch(e.target.value)
        }}
        fullWidth
        variant="outlined"
        label="Branch"
        error={branch === "" || branches.includes(branch)}
      />
      {
        branch === "" &&
        <Typography color={"error"}>Invalid branch name</Typography>
      }
      {
        branches.includes(branch) &&
        <Typography color={"error"}>Branch already exists</Typography>
      }
      <Button
        variant={"contained"}
        onClick={handleAddBranch}
        disabled={branch === "" || branches.includes(branch)}
        sx={{bgcolor: colors.purple}}
      >
        Add branch
      </Button>
    </Box>
  )
}