import {
  Box,
  Stack,
  Typography,
  TextField,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox,
  Theme,
  useMediaQuery
} from '@mui/material';

export default function LocalCompression() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  return (
    <Box m={2}>
      <Stack px="24px" spacing={2}>
        <Typography variant="h5">Расчет на местное сжатие</Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>Методика расчета принята согласно СП 63.13330.2012 пп.8.1.43-45.</Typography>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Схема приложения нагрузки</Typography>
        </Stack>

        <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Вид схемы приложения нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px', maxWidth: '214px' }} size="small">
              <InputLabel>Вид схемы</InputLabel>
              <Select label="Вид схемы">
                <MenuItem value={10}>Схема А</MenuItem>
                <MenuItem value={20}>Схема Б</MenuItem>
                <MenuItem value={20}>Схема В</MenuItem>
                <MenuItem value={30}>Схема Г</MenuItem>
                <MenuItem value={40}>Схема Д</MenuItem>
                <MenuItem value={50}>Схема Е</MenuItem>
                <MenuItem value={60}>Схема Ж</MenuItem>
                <MenuItem value={70}>Схема З</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Box>
          <img
            alt="сalc_local_compression"
            src="/assets/сalc_local_compression.png"
            width={isMobile ? '280px' : '400px'}
          />
        </Box>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Внешние усилия</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Сосредоточенная сила от внешней нагрузки:</Typography>
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

        <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Распределение нагрузки по площадке опирания:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px' }} size="small">
              <InputLabel>Распределение</InputLabel>
              <Select label="Распределение">
                <MenuItem value={10}>Равномерное</MenuItem>
                <MenuItem value={20}>Неравномерное</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">
            Геометрические характеристики плиты и зоны приложения нагрузки
          </Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Ширина зоны приложения нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              a<sub>1</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Высота зоны приложения нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              a<sub>2</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Tooltip
              title={
                <Typography sx={{ fontStyle: 'italic', fontSize: '12px' }}>
                  устанавливается только для схем "e" и "ж"
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom"
            >
              <Typography sx={{ cursor: 'help' }}>
                Расстояние от края до грани нагруженной площадки:
              </Typography>
            </Tooltip>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">c</Typography>
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
                <MenuItem value={120}>В70</MenuItem>
                <MenuItem value={130}>В80</MenuItem>
                <MenuItem value={140}>В90</MenuItem>
                <MenuItem value={150}>В100</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>
              Коэффициент условий работы бетона (γ<sub>b1</sub> · γ<sub>b3</sub> · γ<sub>b4</sub>):
            </Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              γ<sub>bi</sub>
            </Typography>
            <TextField size="small"></TextField>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500} sx={{ fontStyle: 'italic' }}>
            <FormControlLabel control={<Checkbox />} label="Учесть косвенное армирование:" />
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
                <MenuItem value={20}>А400</MenuItem>
                <MenuItem value={30}>А500</MenuItem>
                <MenuItem value={40}>В500</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Длина стержней в направлении x:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              l<sub>x</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Площадь одного стержня в направлении x:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              A<sub>sx</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Количество стержней в направлении x:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              n<sub>x</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">шт.</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Длина стержней в направлении y:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              l<sub>y</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Площадь одного стержня в направлении y:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              A<sub>sy</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Количество стержней в направлении y:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              n<sub>y</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">шт.</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Шаг сеток:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">s</Typography>
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
