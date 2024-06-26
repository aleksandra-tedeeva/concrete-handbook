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
  MenuItem
} from '@mui/material';

export default function EccentricallyStretchedElement() {
  return (
    <Box m={2}>
      <Stack px="24px" spacing={1}>
        <Typography variant="h5">
          Проверка прочности внецентренно растянутого железобетонного элемента
        </Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>
          Методика расчета принята согласно СП 63.133302012, п.8.1.19. Сечение прямоугольное.
          Эксцентриситет в одной плоскости. Арматура расположена у противоположных граней сечения.
          Пока нагрузка рассматривается как временная (т.е. εb2=0.0035).
        </Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Stack px="24px">
          <Typography variant="h6">Внешние усилия</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Изгибающий момент от полной нагрузки:</Typography>
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
            <Typography>Продольная растягивающая сила:</Typography>
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
      </Stack>

      <Stack my="16px" spacing={1}>
        <Stack px="24px">
          <Typography variant="h6">Геометрические характеристики сечения и элемента</Typography>
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
            <Typography>Защитный слой бетона сжатой (менее растянутой) зоны:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">a′</Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Площадь растянутой арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
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
            <Typography>Площадь сжатой (менее растянутой) арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography variant="formula">
              A'<sub>s</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">
              см<sup>2</sup>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Характеристики арматуры и бетона</Typography>
        </Stack>

        <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Класс арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
            <FormControl sx={{ minWidth: '214px' }} size="small">
              <InputLabel>Класс арматуры</InputLabel>
              <Select label="Класс арматуры">
                <MenuItem value={10}>А240</MenuItem>
                <MenuItem value={20}>А300</MenuItem>
                <MenuItem value={30}>А400</MenuItem>
                <MenuItem value={40}>А500</MenuItem>
                <MenuItem value={50}>В500</MenuItem>
              </Select>
            </FormControl>
          </Stack>
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
            <TextField size="small" disabled></TextField>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center">
        <Button variant="outlined" sx={{ minWidth: '214px' }}>
          Рассчитать
        </Button>
      </Stack>
    </Box>
  );
}
