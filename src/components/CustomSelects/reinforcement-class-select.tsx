import {
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectProps
} from '@mui/material';
import { useAppSelector } from '../../store/hooks';

export interface ReinforcementClassSelectProps extends SelectProps {
  text?: string;
}

export default function ReinforcementClassSelect({
  text = 'Класс арматуры',
  ...props
}: ReinforcementClassSelectProps) {
  const { headers } = useAppSelector((state) => state.reinforcement);

  return (
    <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
      <Stack width={500}>
        <Typography>{text}:</Typography>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
        <FormControl sx={{ minWidth: '214px' }} size="small">
          <InputLabel>Класс арматуры</InputLabel>
          <Select label="Класс арматуры" {...props}>
            {headers.map((cl) => (
              <MenuItem key={cl} value={cl}>
                {cl}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}
