import type {ModalBody} from "./MaterialModal.tsx";
import {useMemo, useState} from "react";
import {colors} from "../../const.ts";
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import Typography from "@mui/material/Typography";
import {addBranch} from "../../stores/ProjectSlice.ts";

export default function BranchModal({closeModal}: ModalBody) {
  const [branch, setBranch] = useState<string>("");
  const project = useSelector((state: RootState) => state.project);
  const activeInfo = useSelector((state: RootState) => state.activeProject);
  const namespace = useMemo(() => project.namespaces.find((n) => n.name === activeInfo.currentNamespace)!, [project, activeInfo]);
  const branches = useMemo(() => namespace.branches, [namespace]);

  const dispatch = useDispatch();
  const handleAddBranch = () => {
    dispatch(addBranch({branch: branch, namespace: namespace.name}));
    if (closeModal) {
      closeModal();
    }
  }
  return (
    <>
      <TextField
        value={branch}
        onChange={(e) => {
          setBranch(e.target.value)
        }}
        fullWidth
        variant="outlined"
        label="Branch"
        error={branch === "" || branches.some((b) => b.name === branch)}
      />
      {
        branch === "" &&
        <Typography color={"error"}>Invalid branch name</Typography>
      }
      {
        branches.some((b) => b.name === branch) &&
        <Typography color={"error"}>Branch already exists</Typography>
      }
      <Button
        variant={"contained"}
        onClick={handleAddBranch}
        disabled={branch === "" || branches.some((b) => b.name === branch)}
        sx={{bgcolor: colors.purple}}
      >
        Add branch
      </Button>
    </>
  )
}