import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Tooltip,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material';

export default function CrackingWidth() {
  return (
    <Box m={2}>
      <Stack px="24px" spacing={2}>
        <Typography variant="h5">Проверка на образование трещин и ширины их раскрытия</Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>
          Методика расчета принята согласно СП 63.13330.2012. Рассматриваются трещины нормальные к
          продольной оси элемента. Элемент изгибаемый. Сечение прямоугольное.
        </Typography>
        <Typography>
          Характеристики арматуры классов А500СП, Ау500СП и А600СП приняты согласно СТО
          36554501-065-2020*.
        </Typography>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Внешние усилия</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Момент от полной нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">M</Typography>
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

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Момент от постоянной и длительной нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              M<sub>l</sub>
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

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500} sx={{ fontStyle: 'italic' }}>
            <FormControlLabel control={<Checkbox />} label="Учесть продольную силу:" />
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Tooltip
              title={
                <Typography sx={{ fontStyle: 'italic', fontSize: '12px' }}>
                  сжатие: " + "; растяжение: " − "
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom-start"
            >
              <Typography sx={{ cursor: 'help' }}>Продольная сила от полной нагрузки:</Typography>
            </Tooltip>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">N</Typography>
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

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Продольная сила от постоянной и длительной нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              N<sub>l</sub>
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
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Геометрические характеристики сечения</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Ширина сечения:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">b</Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Высота сечения:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">h</Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Защитный слой бетона растянутой зоны:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">a</Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Защитный слой бетона сжатой зоны:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">a'</Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Площадь растянутой арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              A<sub>s</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Площадь сжатой арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              A'<sub>s</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Диаметр арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              d<sub>s</sub>
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

        <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Класс бетона на сжатие:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px' }} size="small">
              <InputLabel>Класс бетона</InputLabel>
              <Select label="Класс бетона">
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

        <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Класс арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px', maxWidth: '214px' }} size="small">
              <InputLabel>Класс арматуры</InputLabel>
              <Select label="Класс арматуры">
                <MenuItem value={10}>А240</MenuItem>
                <MenuItem value={20}>А300</MenuItem>
                <MenuItem value={20}>А400</MenuItem>
                <MenuItem value={30}>А500</MenuItem>
                <MenuItem value={40}>В500</MenuItem>
                <MenuItem value={20}>А600</MenuItem>
                <MenuItem value={50}>А500СП (СТО 36554501-065-2020*)</MenuItem>
                <MenuItem value={60}>Ау500СП (СТО 36554501-065-2020*)</MenuItem>
                <MenuItem value={70}>А600СП (СТО 36554501-065-2020*)</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Ограничения</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Предельно допустимая ширина продолжительного раскрытия трещин:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula" sx={{ minWidth: '74px' }}>
              a<sub>crc,ult,l </sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>
              Предельно допустимая ширина непродолжительного раскрытия трещин:
            </Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula" sx={{ minWidth: '74px' }}>
              a<sub>crc,ult </sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
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
