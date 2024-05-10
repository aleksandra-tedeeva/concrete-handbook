import {
  Box,
  Stack,
  Typography,
  FormControl,
  FormControlLabel,
  TextField,
  Tooltip,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Button
} from '@mui/material';

export default function ShearForce() {
  return (
    <Box m={2}>
      <Stack px="24px" spacing={2}>
        <Typography variant="h5">
          Расчет по прочности железобетонного элемента при действии поперечной силы
        </Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>
          Расчет производится согласно СП 63.13330.2012 (изм. 1, 2) п.п. 8.1.32 - 8.1.35. Поперечная
          арматура на рассматриваемом участке установлена с постоянным шагом.
        </Typography>
        <Typography>
          Характеристики арматуры классов А500СП, Ау500СП и А600СП приняты согласно СТО
          36554501-065-2020*.
        </Typography>
      </Stack>

      <Stack my="16px">
        <Box>
          <img alt="calc_shear_force" src="/assets/calc_shear_force.png" width="300" />
        </Box>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Внешние усилия</Typography>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Изгибающий момент действующий в сечении:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              M
            </Typography>
            <TextField size="small"></TextField>
            <Tooltip
              title={
                <Typography sx={{ fontStyle: 'italic', fontSize: '12px' }}>
                  1 тс · м = 10<sup>5</sup> кг · см
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom"
            >
              <Typography sx={{ cursor: 'help' }} color="text.secondary">
                кг · см
              </Typography>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Максимальная поперечная сила в начале наклонной трещины:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              Q<sub>max</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Tooltip
              title={
                <Typography sx={{ fontStyle: 'italic', fontSize: '12px' }}>
                  1 тс = 10 <sup>3</sup> кг
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom"
            >
              <Typography sx={{ cursor: 'help' }} color="text.secondary">
                кг
              </Typography>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Tooltip
              title={
                <Typography sx={{ fontStyle: 'italic', fontSize: '12px' }}>
                  обжатие со знаком минус
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom-start"
            >
              <Typography sx={{ cursor: 'help' }}>Продольное усилие:</Typography>
            </Tooltip>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              N
            </Typography>
            <TextField size="small"></TextField>
            <Tooltip
              title={
                <Typography sx={{ fontStyle: 'italic', fontSize: '12px' }}>
                  1 тс = 10 <sup>3</sup> кг
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom"
            >
              <Typography sx={{ cursor: 'help' }} color="text.secondary">
                кг
              </Typography>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Равномерная нагрузка на верхней грани балки::</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              q
            </Typography>
            <TextField size="small"></TextField>
            <Typography sx={{ cursor: 'help' }} color="text.secondary">
              кг/см
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Геометрические характеристики сечения и элемента</Typography>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Высота сечения:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              h
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Ширина сечения:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              b
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Защитный слой бетона растянутой зоны:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              a
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Защитный слой бетона сжатой зоны:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              a'
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Площадь растянутой арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              A<sub>s</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Площадь сжатой арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              A'<sub>s</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Площадь поперечной арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              A<sub>sw</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Шаг поперечной армаруры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              s<sub>w</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Характеристики бетона и арматуры</Typography>
        </Stack>

        <Stack
          spacing={3.8}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Класс бетона на сжатие:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px' }} size="small">
              <InputLabel id="demo-simple-small-label">Класс бетона</InputLabel>
              <Select labelId="demo-simple-small-label" id="demo-simple-small" label="Класс бетона">
                <MenuItem value={10}>В10</MenuItem>
                <MenuItem value={20}>В15</MenuItem>
                <MenuItem value={30}>В20</MenuItem>
                <MenuItem value={40}>В25</MenuItem>
                <MenuItem value={50}>В30</MenuItem>
                <MenuItem value={60}>В35</MenuItem>
                <MenuItem value={70}>В40</MenuItem>
                <MenuItem value={80}>В45</MenuItem>
                <MenuItem value={90}>В50</MenuItem>
                <MenuItem value={100}>В55</MenuItem>
                <MenuItem value={110}>В60</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>
              Коэффициент условий работы бетона (γ<sub>b1</sub> · γ<sub>b3</sub> · γ<sub>b4</sub>):
            </Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '48px', fontStyle: 'italic', fontSize: '20px' }}>
              γ<sub>bi</sub>
            </Typography>
            <TextField size="small" disabled></TextField>
          </Stack>
        </Stack>

        <Stack
          spacing={3.8}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Класс продольной арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px', maxWidth: '214px' }} size="small">
              <InputLabel id="demo-simple-small-label">Класс арматуры</InputLabel>
              <Select
                labelId="demo-simple-small-label"
                id="demo-simple-small"
                label="Класс арматуры"
              >
                <MenuItem value={10}>А240</MenuItem>
                <MenuItem value={20}>А400</MenuItem>
                <MenuItem value={30}>А500</MenuItem>
                <MenuItem value={40}>В500</MenuItem>
                <MenuItem value={50}>А500СП (СТО 36554501-065-2020*)</MenuItem>
                <MenuItem value={60}>Ау500СП (СТО 36554501-065-2020*)</MenuItem>
                <MenuItem value={70}>А600СП (СТО 36554501-065-2020*)</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack
          spacing={3.8}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Класс поперечной арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px', maxWidth: '214px' }} size="small">
              <InputLabel id="demo-simple-small-label">Класс арматуры</InputLabel>
              <Select
                labelId="demo-simple-small-label"
                id="demo-simple-small"
                label="Класс арматуры"
              >
                <MenuItem value={10}>А240</MenuItem>
                <MenuItem value={20}>А300</MenuItem>
                <MenuItem value={20}>А400</MenuItem>
                <MenuItem value={30}>А500</MenuItem>
                <MenuItem value={40}>В500</MenuItem>
                <MenuItem value={50}>А500СП (СТО 36554501-065-2020*)</MenuItem>
                <MenuItem value={60}>Ау500СП (СТО 36554501-065-2020*)</MenuItem>
                <MenuItem value={70}>А600СП (СТО 36554501-065-2020*)</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap">
        <Button variant="outlined" sx={{ minWidth: '214px' }}>
          Рассчитать
        </Button>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ fontStyle: 'italic' }}>показать результат в новом окне</Typography>
          }
        />
      </Stack>
    </Box>
  );
}
