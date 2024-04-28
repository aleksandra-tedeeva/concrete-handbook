import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import IconC from '../../icons/icon-c';
import IconG from '../../icons/icon-g';

export interface SearchListItemProps {
  props: React.HTMLAttributes<HTMLLIElement>;
  option: { label: string; type: string };
}

export default function SearchListItem({ props, option }: SearchListItemProps) {
  return (
    <MenuItem>
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
  );
}
