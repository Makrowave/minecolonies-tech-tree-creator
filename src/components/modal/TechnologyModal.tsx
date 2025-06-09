import type {ModalBody} from "./MaterialModal.tsx";
import type {TechnologyType} from "../project/Technology.tsx";
import {type ChangeEvent, useRef, useState} from "react";
import type {RootState} from "../../stores/Store.ts";
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, FormControlLabel, TextField, Tooltip, Typography} from "@mui/material";
import {colors} from "../../const.ts";
import {addTechnology, editTechnology} from "../../stores/ProjectSlice.ts";



type TechnologyModalProps = {
  tech?: TechnologyType;
  editMode?: boolean;
  parentInfo?: {level: number, name: string};
} & ModalBody

export default function TechnologyModal({closeModal, tech, editMode, parentInfo}: TechnologyModalProps) {

  const oldNameRef = useRef<string>(tech?.name ?? "")
  const activeProject = useSelector((state: RootState) => state.activeProject);
  const project = useSelector((state: RootState) => state.project);

  const [technologyName, setTechnologyName] = useState<string>(project.localizations.find((loc) => loc.id === activeProject.currentLocalization?.id)?.keys[tech?.name ?? ""] ?? "");
  const [technologySubtitle, setTechnologySubtitle] = useState<string>(project.localizations.find((loc) => loc.id === activeProject.currentLocalization?.id)?.keys[`${tech?.name.slice(0, -4)}subtitle`] ?? "");


  const [technology, setTechnology] = useState<TechnologyType>(tech ??
    {
      name: "",
      branch: activeProject.currentBranch!,
      effects: [],
      icon: "",
      researchLevel: parentInfo?.level ?? 1,
      parentResearch: parentInfo?.name,
      custom: true
    }
  );


  const handleTechnologyChange = <K extends keyof TechnologyType>(
    key: K,
    value: TechnologyType[K]
  ) => {
    setTechnology((prev) => ({...prev, [key]: value}));
  }


  const dispatch = useDispatch();
  const handleEdit = () => {
    handleTechnologyChange("custom", true)
    dispatch(editTechnology({
      namespace: activeProject.currentNamespace!,
      branch: activeProject.currentBranch!,
      technology: technology,
      subtitle: technologySubtitle,
      name: technologyName,
      oldNameId: oldNameRef.current,
    }))
  }
  const handleAdd = () => {
    dispatch(addTechnology({
        namespace: activeProject.currentNamespace!,
        branch: activeProject.currentBranch!,
        technology: technology,
        name: technologyName,
        subtitle: technologySubtitle,
    }))
  }

  const handleSubmit = () => {
    if (editMode) {
      handleEdit();
    } else {
      handleAdd();
    }
    if(closeModal) {
      closeModal();
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTechnologyName(value);
    handleTechnologyChange("name", createTechnologyId(value, activeProject.currentNamespace!, activeProject.currentBranch!) + ".name")
    handleTechnologyChange("subtitle", createTechnologyId(value, activeProject.currentNamespace!, activeProject.currentBranch!) + ".subtitle")
  }
  const handleSubtitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTechnologySubtitle(value);
  }

  return(
    <>
      <Tooltip title="Name of technology. It will be added to en_us localization and current localization.">
      <TextField
        label={"Name"}
        value={technologyName}
        onChange={handleNameChange}
      />
      </Tooltip>
      <Typography>
        {technology.name}
      </Typography>

      <Tooltip title="Additional line of text under name - not a description - effects have descriptions of what they are doing.">
        <TextField
          label={"Subtitle"}
          value={technologySubtitle}
          onChange={handleSubtitleChange}
        />
      </Tooltip>
      <Typography>
        {technology.subtitle}
      </Typography>
      {/*Insert icon later*/}
      {/*Create a component for creating costs*/}
      {/*Create a component for creating requirements*/}
      {/*Make a select of effects and an option to create one on the go*/}
      <Tooltip title={"If true, the research cannot be undone."}>
        <FormControlLabel
          control={<Checkbox checked={technology["no-reset"] ?? false} onChange={() => handleTechnologyChange("no-reset", !technology["no-reset"])} />}
          label="No reset"
        />
      </Tooltip>
      <Tooltip title={"If true, attempts to instantly (or within 30 seconds) complete the research after it has been begun."}>
        <FormControlLabel
          control={<Checkbox checked={technology.instant ?? false} onChange={() => handleTechnologyChange("instant", !technology.instant)} />}
          label="Instant"
        />
      </Tooltip>
      <Tooltip title={"If true, does not display the research until its requirements are fulfilled. Has no effect if the research has no requirements or only has item costs"}>
        <FormControlLabel
          control={<Checkbox checked={technology.hidden ?? false} onChange={() => handleTechnologyChange("hidden", !technology.hidden)} />}
          label="Hidden"
        />
      </Tooltip>
      <Tooltip title={"If true and the research has more than one descendant research, allows completion of only one of those researches at a time."}>
        <FormControlLabel
          control={<Checkbox checked={technology.exclusiveChildResearch ?? false} onChange={() => handleTechnologyChange("exclusiveChildResearch", !technology.exclusiveChildResearch)}/>}
          label="Exclusive Child Research"
        />
      </Tooltip>
      <Button variant={"contained"} sx={{bgcolor: colors.purple}} onClick={handleSubmit}>
        {editMode ? "Save changes" :"Add Technology"}
      </Button>
    </>
  )
}


const createTechnologyId = (name: string, namespace: string, branch: string) => {
  return `${namespace === "minecolonies" ? "com.minecolonies" : namespace}.research.${branch}.${name.toLowerCase().replace(" ", "")}`;
}