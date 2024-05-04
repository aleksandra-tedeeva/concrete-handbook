import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuItemProps,
  Typography
} from '@mui/material';
import IconC from '../../icons/icon-c';
import IconG from '../../icons/icon-g';

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
        <ListItemIcon>
          {option.type === 'mark' ? (
            <IconG sx={{ width: '16px', height: '16px' }} />
          ) : (
            <IconC sx={{ width: '16px', height: '16px' }} />
          )}
        </ListItemIcon>
        <ListItemText>{option.label}</ListItemText>
        <Typography variant="body2" color="text.secondary">
          {option.type === 'mark' ? 'Марка бетона' : 'Класс бетона'}
        </Typography>
      </MenuItem>
    </Box>
  );
}
