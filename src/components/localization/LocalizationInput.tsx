import {TableCell, TableRow, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import {type ChangeEvent, useEffect, useState} from "react";
import {addLocalizationKey} from "../../stores/ProjectSlice.ts";


type LocalizationProps = {
  localizationKey: string;
  localizationId: string;
}

export default function LocalizationInput({localizationKey, localizationId}: LocalizationProps) {

  const project = useSelector((state: RootState) => state.project)
  const defaultLocalization = project.localizations.find((l) => l.id === "en_us")!.keys;
  const activeLocalizationInfo = useSelector((state: RootState) => state.activeProject)
  const activeLocalization = project.localizations.find((l) => l.id === activeLocalizationInfo.currentLocalization?.id);

  const [localizationValue, setLocalizationValue] = useState<string>(activeLocalization?.keys[localizationKey] ?? "");
  
  useEffect(() => {
    setLocalizationValue(activeLocalization?.keys[localizationKey] ?? "");
  }, [activeLocalization, localizationKey])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalizationValue(event.target.value)
  }
  const dispatch = useDispatch();
  const handleBlur = () => {
    dispatch(addLocalizationKey({key: localizationKey, localizationId: localizationId, value: localizationValue}))
  }

  return (
    <TableRow>
      <TableCell>
        {localizationKey}
      </TableCell>
      <TableCell>
      {defaultLocalization[localizationKey] ?? localizationKey}
        </TableCell>
      <TableCell>
      <TextField
        value={localizationValue}
        placeholder={localizationKey}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
      />
        </TableCell>
    </TableRow>
  )
}