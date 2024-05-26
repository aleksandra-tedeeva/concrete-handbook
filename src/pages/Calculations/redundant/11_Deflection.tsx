import {
  Box,
  Stack,
  Typography,
  TextField,
  Tooltip,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Radio,
  RadioGroup
} from '@mui/material';
import useIsMobile from '../../../hooks/useIsMobile';

export default function Deflection() {
  const isMobile = useIsMobile();
  return (
    <Box m={2}>
      <Stack px="24px" spacing={2}>
        <Typography variant="h5">
          Определение прогиба железобетонного элемента (упрощенное) по СП 63.13330.2012
        </Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>Методика расчета принята согласно СП 63.1333.2012.</Typography>
        <Typography>Рассматривается упрощенная приближенная методика.</Typography>
        <Typography>Сечение прямоугольное. Элемент изгибаемый.</Typography>
        <Typography>Арматура в сжатой зоне не учитывается.</Typography>
        <Typography>
          Влияние работы растянутого бетона между трещинами не учитывается ψ<sub>s</sub>=1.
        </Typography>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Нагрузки и ограничения</Typography>
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
            <Typography>Изгибающий момент от длительной части нагрузки:</Typography>
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
          <Stack width={500}>
            <Typography>Предельный прогиб:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">
              f<sub>ult</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel value="Схема 1" control={<Radio />} label="Схема 1" />
              <FormControlLabel value="Схема 2" control={<Radio />} label="Схема 2" />
              <FormControlLabel value="Схема 3" control={<Radio />} label="Схема 3" />
              <FormControlLabel value="Схема 4" control={<Radio />} label="Схема 4" />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Box>
          <img
            alt="calc_deflection"
            src="/assets/calc_deflection.png"
            width={isMobile ? '280px' : '400px'}
          />
        </Box>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Геометрические характеристики сечения и элемента</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
          <Stack width={500}>
            <Typography>Расчетный пролет балки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography variant="formula">l</Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
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
            <Typography>Площадь растянутой арматуры:</Typography>
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
                <MenuItem value={20}>А400</MenuItem>
                <MenuItem value={30}>А500</MenuItem>
                <MenuItem value={40}>В500</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap">
        <Button variant="outlined" sx={{ minWidth: '214px' }}>
          Рассчитать
        </Button>
      </Stack>
    </Box>
  );
}
