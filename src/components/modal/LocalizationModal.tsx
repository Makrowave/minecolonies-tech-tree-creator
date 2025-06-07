import type {Localization} from "../project/Project.tsx";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {colors, localizations} from "../../const.ts";
import {useState} from "react";
import type {ModalBody} from "./MaterialModal.tsx";
import {useDispatch} from "react-redux";
import {addLocalization} from "../../stores/ProjectSlice.ts";


type LocalizationModalProps = {
  usedLanguages: Localization[];
} & ModalBody;

export default function LocalizationModal({usedLanguages, closeModal}: LocalizationModalProps) {
  const [localization, setLocalization] = useState<string>("");

  const dispatch = useDispatch();

  const handleAddLanguage = () => {
    dispatch(addLocalization(localizations.find((loc) => loc.id === localization)));
    if (closeModal) {
      closeModal();
    }
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-localization">Localization</InputLabel>
        <Select
          label="Localization"
          value={localization}
          onChange={(e) => setLocalization(e.target.value)}
        >
          {localizations.filter((localization) => !usedLanguages.some((used) => used.id === localization.id))
            .map((localization) => (
                <MenuItem key={localization.id} value={localization.id}>
                  {localization.name}
                </MenuItem>
              )
            )
          }
        </Select>
      </FormControl>
      <Button
        variant={"contained"}
        onClick={handleAddLanguage}
        disabled={localization === ""}
        sx={{bgcolor: colors.purple}}
      >
        Add localization
      </Button>
    </>
  )
}