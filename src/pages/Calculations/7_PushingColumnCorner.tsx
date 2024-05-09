import {
  Box,
  Stack,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Tooltip,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Button
} from '@mui/material';

export default function PushingColumnCorner() {
  return (
    <Box m={2}>
      <Stack px="24px" spacing={2}>
        <Typography variant="h5">
          Проверка несущей способности на продавливание (колонна на углу)
        </Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>
          Методика расчета принята согласно СП 63.13330.2012 п.8.1.46 - 8.1.52. Рассматривается
          случай когда поперечная арматура распложена равномерно вдоль расчетного контура
          продавливания. Присутствуют изгибающие моменты.
        </Typography>
        <Typography>
          Зона передачи усилия F прямоугольная с размерами a<sub>c</sub> · b<sub>c</sub> и
          расположена на углу плоского элемента.
        </Typography>
        <Typography>
          Характеристики арматуры классов А500СП, Ау500СП и А600СП приняты согласно СТО
          36554501-065-2020*.
        </Typography>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Ориентация площадки относительно края</Typography>
        </Stack>

        <Stack spacing={1} direction="row">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Случай 1" control={<Radio />} label="Случай 1" />
              <FormControlLabel value="Случай 2" control={<Radio />} label="Случай 2" />
              <FormControlLabel value="Случай 3" control={<Radio />} label="Случай 3" />
              <FormControlLabel value="Случай 4" control={<Radio />} label="Случай 4" />
            </RadioGroup>
          </FormControl>
        </Stack>

        <Stack>
          <Box
            sx={{
              height: '430px',
              width: '430px'
            }}
          >
            <img alt="calc_pushing_col_corner" src="/assets/calc_pushing_col_corner.png" />
          </Box>
        </Stack>

        <Stack width={500}>
          <Typography>Расстояние от центра колонны до края плиты по оси x:</Typography>
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center" py="8px">
          <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
            x<sub>a</sub>
          </Typography>
          <TextField size="small"></TextField>
          <Typography color="text.secondary">см</Typography>
        </Stack>

        <Stack width={500}>
          <Typography>Расстояние от центра колонны до края плиты по оси y:</Typography>
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center" py="8px">
          <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
            y<sub>a</sub>
          </Typography>
          <TextField size="small"></TextField>
          <Typography color="text.secondary">см</Typography>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Внешние усилия *</Typography>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Сосредоточенная сила от внешней нагрузки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
              F
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
          spacing={3.8}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Направление усилия F:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={2.7} py="8px">
            <FormControl sx={{ minWidth: '214px' }} size="small">
              <InputLabel id="demo-simple-small-label">Класс арматуры</InputLabel>
              <Select
                labelId="demo-simple-small-label"
                id="demo-simple-small"
                label="Класс арматуры"
              >
                <MenuItem value={10}>↑ Снизу вверх</MenuItem>
                <MenuItem value={20}>↓ Сверзу вниз</MenuItem>
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
            <Typography>Изгибающий момент вдоль оси x:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
              M<sub>x</sub>
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
            <Typography>Изгибающий момент вдоль оси y:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
              M<sub>y</sub>
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
            <FormControlLabel
              control={<Checkbox />}
              label="Делить изгибающие моменты пополам (M/2)"
            />
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
                  от эксцентиситета продавливающего усилия
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom"
            >
              <FormControlLabel
                sx={{ cursor: 'help' }}
                control={<Checkbox />}
                label="Делить дополнительные моменты пополам (Fe/2)"
              />
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">
            Геометрические характеристики плиты и зоны приложения нагрузки
          </Typography>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Высота зоны приложения нагрзуки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
              a<sub>c(y)</sub>
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
            <Typography>Ширина зоны приложения нагрзуки:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
              b<sub>c(x)</sub>
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
            <Typography>Толщина плиты:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
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
            <Typography>Защитный слой бетона растянутой зоны:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
              a
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
          <Stack spacing={1} direction="row" alignItems="center" pl={2.7} py="8px">
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
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
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
            <Typography>Класс арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" pl={2.7} py="8px">
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

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>
              Площадь поперечной арматуры с шагом s<sub>w</sub>:
            </Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
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
            <Typography>Шаг поперечной арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '36px', fontStyle: 'italic', fontSize: '20px' }}>
              s<sub>w</sub>
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Опции расчета</Typography>
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
                  исключительно для тех кто понимает о чем речь
                </Typography>
              }
              enterDelay={500}
              leaveDelay={200}
              placement="bottom"
            >
              <FormControlLabel
                sx={{ cursor: 'help' }}
                control={<Checkbox />}
                label="Выполнять расчет для отдельных точек контура продавливания с учетом знаков изгибающих моментов:"
              />
            </Tooltip>
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

      <Stack my="16px">
        <Stack>
          <Typography variant="h6">* Примечания:</Typography>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack my="8px" spacing={1}>
            <Typography>
              На рисунке показаны положительные направления усилий M<sub>x</sub>, M<sub>y</sub>.
            </Typography>
            <Typography>Положительное усилие F соответствует направлению снизу вверх.</Typography>
            <Typography>
              Важно! Если момент M и соответствующий эксцентристет x<sub>c</sub> (у<sub>c</sub>)
              одного знака, то момент увеличивается (по модулю) на величину F · x<sub>c</sub> (F · у
              <sub>c</sub>), если разных то уменьшается на эту же величину. Сказаное справедливо при
              положительном значении F, в противном случае будет иметь место обратная ситуация.
              Величины x<sub>c</sub> и у<sub>c</sub> определяются в расчете и зависят от размеров и
              положения относительно края плиты.
            </Typography>
            <Typography>
              Направление моментов принято вдоль одноименных осей, а не относительно их т.к.
              подобный подход принят в СП.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
