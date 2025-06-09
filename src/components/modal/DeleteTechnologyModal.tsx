import {Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import type {ModalBody} from "./MaterialModal.tsx";
import {deleteTechnology} from "../../stores/ProjectSlice.ts";
import type {RootState} from "../../stores/Store.ts";
import type {TechnologyType} from "../project/Technology.tsx";


type DeleteTechnologyProps = {
  technology: TechnologyType
  techChildren: TechnologyType[]
  redrawArrows?: () => void
} & ModalBody

export default function DeleteTechnologyModal({closeModal, technology, techChildren, redrawArrows}: DeleteTechnologyProps) {

  const activeProject = useSelector((state: RootState) => state.activeProject)

  const dispatch = useDispatch();
  const handleDelete = () => {
    const deleteData =  {
      namespace: activeProject.currentNamespace!,
      branch: activeProject.currentBranch!,
      technology: technology,
      childrenNames: techChildren.map((child) => child.name),
    }
    dispatch(deleteTechnology(deleteData))
    if(redrawArrows) {
      redrawArrows()
    }
    if(closeModal) {
      closeModal()
    }
  }

  return (
    <>
      <Typography variant="h6" color="textSecondary">
        Are you sure you want to delete this technology?
      </Typography>
      <Button color="error" variant={"contained"} onClick={handleDelete}>
        Delete
      </Button>
    </>
  )
}