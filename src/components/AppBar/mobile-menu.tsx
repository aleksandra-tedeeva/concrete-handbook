import { MenuList, MenuItem, ListItemText, Divider } from '@mui/material';
import {
  calculationMenuItems,
  concreteListsMenuItems,
  menuItems
} from '../../constants/menu-items';
import { useNavigate } from 'react-router-dom';

export interface MobileMenuProps {
  onClose?: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    navigate(link);
    if (onClose) {
      onClose();
    }
  };

  return (
    <MenuList dense>
      {concreteListsMenuItems.map((item) => (
        <MenuItem key={item.link}>
          <ListItemText key={item.link} onClick={() => handleLinkClick(item.link)}>
            {item.name}
          </ListItemText>
        </MenuItem>
      ))}

      <Divider />

      {menuItems.map((item) => (
        <MenuItem key={item.link}>
          <ListItemText key={item.link} onClick={() => handleLinkClick(item.link)}>
            {item.name}
          </ListItemText>
        </MenuItem>
      ))}

      <Divider />

      {calculationMenuItems.map((item) => (
        <MenuItem key={item.link}>
          <ListItemText key={item.link} onClick={() => handleLinkClick(item.link)}>
            {item.name}
          </ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
