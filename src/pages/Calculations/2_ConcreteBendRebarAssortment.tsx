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
import { calculateConcreteBendRebarAssortment } from '../../calculations/2_calc-concrete-bend-rebar-assortment';

export default function ConcreteBendRebarAssortment() {
  calculateConcreteBendRebarAssortment();

  return (
    <Box m={2}>
      <Stack px="24px" spacing={1}>
        <Typography variant="h5">
          Подбор арматуры изгибаемого железобетонного элемента (по прочности)
        </Typography>
        <Typography variant="h6">Допущения и предпосылки</Typography>
      </Stack>

      <Stack my="16px" spacing={1}>
        <Typography>
          Методика расчета принята согласно СП 63.13330.2018 пп.8.1.8-8.1.13, а так же отдельных
          положений из «Пособия по проектированию к СП 52-101-2003». Сечение прямоугольное либо
          тавровое с полкой в сжатой зоне. Элемент изгибаемый. Арматура ненапрягаемая.
        </Typography>
        <Typography>
          Характеристики арматуры классов А500СП, Ау500СП и А600СП приняты согласно СТО
          36554501-065-2020*.
        </Typography>
        <Typography>
          Алгоритм учитывает ограничения на ширину полки тавра в предположении, что свесы полки
          консольные. В случае неконсольных свесов (плита с ребрами) ширину полки вводимую расчет
          следует определить самостоятельно согласно п. 8.1.11 и указать в исходных данных как для
          консольного свеса.
        </Typography>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Нагрузка</Typography>
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
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
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
          spacing={3.8}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Продолжительность действия нагрузки:</Typography>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" pl={2} py="8px">
            <FormControl sx={{ minWidth: '214px' }} size="small">
              <InputLabel id="demo-simple-small-label">Продолжительность</InputLabel>
              <Select
                labelId="demo-simple-small-label"
                id="demo-simple-small"
                label="Продолжительность"
              >
                <MenuItem value={10}>Кратковременная</MenuItem>
                <MenuItem value={20}>Длительная</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Геометрические характеристики сечения</Typography>
        </Stack>

        <Stack
          spacing={3.8}
          direction="row"
          alignItems="center"
          justifyContent="start"
          flexWrap="wrap"
        >
          <Stack width={500}>
            <Typography>Форма поперечного сечения:</Typography>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" pl={2} py="8px">
            <FormControl sx={{ minWidth: '214px' }} size="small">
              <InputLabel id="demo-simple-small-label">Форма сечения</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-small"
                label="Форма сечения"
              >
                <MenuItem value={10}>Прямоугольное</MenuItem>
                <MenuItem value={20}>Тавровое</MenuItem>
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
            <Typography>Ширина сечения:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
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
            <Typography>Ширина полки тавра:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
              b<sub>f</sub>
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
            <Typography>Высота сечения:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
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
            <Typography>Высота полки тавра:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
              h<sub>f</sub>
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
            <Typography>Расст. от грани бетона до ц.т. растянутой арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
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
            <Typography>Расстояние от грани бетона до ц.т. сжатой арматуры:</Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
              a'
            </Typography>
            <TextField size="small"></TextField>
            <Typography color="text.secondary">см</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack my="16px">
        <Stack px="24px">
          <Typography variant="h6">Характеристики арматуры и бетона</Typography>
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

          <Stack spacing={1} direction="row" alignItems="center" pl={2} py="8px">
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
              label={
                <Typography sx={{ fontStyle: 'italic' }}>
                  Коэффициент условий работы бетона (γ<sub>b1</sub> · γ<sub>b3</sub> · γ
                  <sub>b4</sub>):
                </Typography>
              }
            />
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center" py="8px">
            <Typography sx={{ minWidth: '30px', fontStyle: 'italic', fontSize: '20px' }}>
              γ<sub>bi</sub>
            </Typography>
            <TextField size="small"></TextField>
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
          <Stack spacing={1} direction="row" alignItems="center" pl={2} py="8px">
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
