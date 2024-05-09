import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuItemProps,
  Typography
} from '@mui/material';
import { getIcon, getType } from './util';

export interface SearchListItemProps extends MenuItemProps {
  option: { label: string; type: string };
  onClick?: () => void;
}

export default function SearchListItem({
  option,
  onClick = () => {},
  ...other
}: SearchListItemProps) {
  return (
    <Box>
      <MenuItem onClick={onClick} {...other}>
        <ListItemIcon>{getIcon(option.type)}</ListItemIcon>
        <ListItemText>{option.label}</ListItemText>
        <Typography variant="body2" color="text.secondary">
          {getType(option.type)}
        </Typography>
      </MenuItem>
    </Box>
  );
}
