import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Stack,
  Typography
} from '@mui/material';
import { useAppSelector } from '../../store/hooks';

export interface ConcreteClassSelectProps extends SelectProps {}

export default function ConcreteClassSelect(props: ConcreteClassSelectProps) {
  const { headers } = useAppSelector((state) => state.class);

  return (
    <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
      <Stack width={500}>
        <Typography>Класс бетона на сжатие:</Typography>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
        <FormControl sx={{ minWidth: '214px' }} size="small">
          <InputLabel>Класс бетона</InputLabel>
          <Select label="Класс бетона" {...props}>
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
