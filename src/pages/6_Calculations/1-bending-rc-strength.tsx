import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import LoadShower from '../../components/LoadShower';

export type LoadType = 'short' | 'long';

export default function BendingRCStrength() {
  const [load, setLoad] = useState<LoadType>('short');
  const [bendingMoment, setBendingMoment] = useState<string>('1400000');

  const handleLoadChange = (e: SelectChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    const value = target.value as LoadType;
    setLoad(value);
  };

  const handleMomentChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setBendingMoment(value);
  };

  return (
    <Stack m={2} spacing={1}>
      <Typography variant="h6">Нагрузка</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>Изгибающий момент действующий в сечении:</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>M</Typography>
          <TextField value={bendingMoment} onChange={handleMomentChange} />
          <Typography>кг·см (1 тс·м = 105 кг·см)</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack>
          <Typography>Продолжительность действия нагрузки:</Typography>
          <Typography variant="caption" sx={(theme) => ({ color: theme.palette.text.secondary })}>
            (при кратковременной нагрузке Rsc имеет пониженное значение)
          </Typography>
        </Stack>
        <FormControl sx={{ minWidth: '200px' }}>
          <InputLabel id="demo-simple-select-label">Нагрузки</InputLabel>
          <Select
            value={load}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Нагрузки"
            onChange={handleLoadChange}
          >
            <MenuItem value="short">Кратковременная</MenuItem>
            <MenuItem value="long">Длительная</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack>
        <Typography>bendingMoment: {bendingMoment}</Typography>
        <LoadShower load={load} color="blue" />
      </Stack>
    </Stack>
  );
}
