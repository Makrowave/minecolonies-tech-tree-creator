import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {type MouseEvent, type ReactElement, type ReactNode, useState} from "react";
import {ListItemIcon, Menu, MenuItem} from "@mui/material";
import MaterialModal from "../../modal/MaterialModal.tsx";
import AddIcon from "@mui/icons-material/Add";

type ExpandableMenuProps = {
  primary: string;
  secondary: string;
  modal?: ReactElement<{ closeModal: () => void }>;
  children?: ReactNode;
}

export default function ExpandableMenu({primary, secondary, modal, children}: ExpandableMenuProps) {

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(menuAnchor);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <List>
        <ListItemButton onClick={handleMenuOpen}>
          <ListItemText primary={primary}
                        secondary={secondary}/>
        </ListItemButton>
      </List>
      <Menu
        id="language-menu"
        anchorEl={menuAnchor}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
      >
        {children}
        {
          modal && (
            <MaterialModal
              button={
                <MenuItem>
                  <ListItemText>
                    {`Add ${primary.toLowerCase()}`}
                  </ListItemText>
                  <ListItemIcon>
                    <AddIcon/>
                  </ListItemIcon>
                </MenuItem>
              }
              label={`Add ${primary.toLowerCase()}`}
            >
              {modal}
            </MaterialModal>
          )
        }
      </Menu>
    </>
  )
}