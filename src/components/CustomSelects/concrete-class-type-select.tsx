import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Stack,
  Typography
} from '@mui/material';

export interface ConcreteClassTypeSelectProps extends SelectProps {}

export type ConcreteClassTypeKeys = 'heavy' | 'light' | 'cellular';

export interface ConcreteClassType {
  key: ConcreteClassTypeKeys;
  name: string;
}

const concreteClassTypes: ConcreteClassType[] = [
  {
    key: 'heavy',
    name: 'Тяжелый и мелкозернистый и напрягающий'
  },
  {
    key: 'light',
    name: 'Легкий'
  },
  {
    key: 'cellular',
    name: 'Ячеистый'
  }
];

export default function ConcreteClassTypeSelect({ ...props }: ConcreteClassTypeSelectProps) {
  return (
    <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
      <Stack width={500}>
        <Typography>Тип бетона на сжатие:</Typography>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
        <FormControl sx={{ minWidth: '214px' }} size="small">
          <InputLabel>Тип бетона</InputLabel>
          <Select label="Тип бетона" sx={{ maxWidth: '216px' }} {...props}>
            {concreteClassTypes.map(({ key, name }) => (
              <MenuItem key={key} value={key}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}
