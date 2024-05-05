import {
  Box,
  Stack,
  Typography,
  TextField,
  Tooltip,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox
} from '@mui/material';

export default function PushingColumnCenter() {
  return (
    <Box m={2}>
      <Stack px="24px" spacing={2}>
        <Typography variant="h5">
          Проверка несущей способности на продавливание (середина плиты)
        </Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>
          Расчет производится согласно СП 63.13330.2012 п.8.1.46 - 8.1.52. Зона передачи усилия F
          прямоугольная с размерами ac×bc и находится внутри плоского элемента. Рассматривается
          случай когда поперечная арматура распложена равномерно вдоль расчетного контура
          продавливания.
        </Typography>
        <Typography>
          Характеристики арматуры классов А500СП, Ау500СП и А600СП приняты согласно СТО
          36554501-065-2020*.
        </Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Stack px="24px">
          <Typography variant="h6">Внешние усилия</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Сосредоточенная сила от внешней нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>F</Typography>
            <TextField size="small"></TextField>
            <Tooltip title="1 тс = 10^3 кгc" enterDelay={500} leaveDelay={200}>
              <Button aria-label="1 тс = 10^3 кгc" variant="outlined" size="small">
                кг
              </Button>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <FormControlLabel control={<Checkbox />} label="Учесть изгибающие моменты:" />
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500} pl={4}>
            <Typography>Изгибающий момент вдоль оси x:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>Mx</Typography>
            <TextField size="small"></TextField>
            <Tooltip title="1 тс · м = 10^5 кг · см" enterDelay={500} leaveDelay={200}>
              <Button aria-label="1 тс · м = 10^5 кг · см" variant="outlined" size="small">
                кг · см
              </Button>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500} pl={4}>
            <Typography>Изгибающий момент вдоль оси y:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>My</Typography>
            <TextField size="small"></TextField>
            <Tooltip title="1 тс · м = 10^5 кг · см" enterDelay={500} leaveDelay={200}>
              <Button aria-label="1 тс · м = 10^5 кг · см" variant="outlined" size="small">
                кг · см
              </Button>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500} pl={4}>
            <FormControlLabel
              control={<Checkbox />}
              label="Делить изгибающие моменты пополам (M/2)"
            />
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <FormControlLabel control={<Checkbox />} label="Учесть отпор грунта под плитой:" />
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500} pl={4}>
            <Typography>Отпор грунта под плитой:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>p</Typography>
            <TextField size="small"></TextField>
            <Tooltip title="1 тс/м² = 0.1 кгс/см²" enterDelay={500} leaveDelay={200}>
              <Button aria-label="1 тс/м² = 0.1 кгс/см²" variant="outlined" size="small">
                кгс/см²
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Stack px="24px">
          <Typography variant="h6">
            Геометрические характеристики плиты и зоны приложения нагрузки
          </Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Ширина зоны приложения нагрзуки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>ac(y) </Typography>
            <TextField size="small"></TextField>
            <Button variant="outlined" size="small">
              см
            </Button>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Высота зоны приложения нагрзуки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>bc(x) </Typography>
            <TextField size="small"></TextField>
            <Button variant="outlined" size="small">
              см
            </Button>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Высота сечения:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>h</Typography>
            <TextField size="small"></TextField>
            <Button variant="outlined" size="small">
              см
            </Button>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Защитный слой бетона растянутой зоны:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>a</Typography>
            <TextField size="small"></TextField>
            <Button variant="outlined" size="small">
              см
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Stack px="24px">
          <Typography variant="h6">Характеристики бетона и арматуры</Typography>
        </Stack>

        <Stack spacing={3.8} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Класс бетона на сжатие:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={1.2}>
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
                <MenuItem value={120}>В70</MenuItem>
                <MenuItem value={130}>В80</MenuItem>
                <MenuItem value={140}>В90</MenuItem>
                <MenuItem value={150}>В100</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Коэффициент условий работы бетона (γb1×γb3×γb4):</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>γbi</Typography>
            <TextField size="small"></TextField>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <FormControlLabel control={<Checkbox />} label="Учесть изгибающие моменты:" />
          </Stack>
        </Stack>

        <Stack spacing={3.8} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500} pl={4}>
            <Typography>Класс арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={1.2}>
            <FormControl sx={{ minWidth: '214px' }} size="small">
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

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Площадь поперечной арматуры с шагом sw:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>Asw</Typography>
            <TextField size="small"></TextField>
            <Button variant="outlined" size="small">
              см²
            </Button>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="start">
          <Stack width={500}>
            <Typography>Шаг поперечной арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography sx={{ minWidth: '24px' }}>sw</Typography>
            <TextField size="small"></TextField>
            <Button variant="outlined" size="small">
              см
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center">
        <Button variant="outlined" sx={{ minWidth: '214px' }}>
          Рассчитать
        </Button>
        <FormControlLabel control={<Checkbox />} label="показать результат в новом окне" />
      </Stack>
    </Box>
  );
}
