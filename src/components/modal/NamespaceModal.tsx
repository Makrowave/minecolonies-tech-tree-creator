import type {ModalBody} from "./MaterialModal.tsx";
import {Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {colors} from "../../const.ts";
import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import {addNamespace} from "../../stores/ProjectSlice.ts";

export default function NamespaceModal({closeModal}: ModalBody) {
  const [namespace, setNamespace] = useState<string>("");
  const project = useSelector((state: RootState) => state.project);
  const namespaces = useMemo(() => project.namespaces, [project]);

  const dispatch = useDispatch();
  const handleAddNamespace = () => {
    dispatch(addNamespace(namespace));
    if(closeModal) {
      closeModal();
    }
  }

  return (
    <>
      <TextField
        value={namespace}
        onChange={(e) => {
          setNamespace(e.target.value)
        }}
        fullWidth
        variant="outlined"
        label="Namespace"
        error={namespace === "" || namespaces.some((n) => n.name === namespace)}
      />
      {
        namespace === "" &&
        <Typography color={"error"}>Invalid branch name</Typography>
      }
      {
        namespaces.some((n) => n.name === namespace) &&
        <Typography color={"error"}>Branch already exists</Typography>
      }
      <Button
        variant={"contained"}
        onClick={handleAddNamespace}
        disabled={namespace === "" || namespaces.some((n) => n.name === namespace)}
        sx={{bgcolor: colors.purple}}
      >
        Add namespace
      </Button>
    </>
  )
}