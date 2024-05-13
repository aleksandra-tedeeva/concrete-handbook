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
import * as Yup from 'yup';
import { regOnlyNumbers } from '../../util/regOnlyNumbers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ConcreteClassSelect from '../../components/CustomSelects/concrete-class-select';
import ReinforcementClassSelect from '../../components/CustomSelects/reinforcement-class-select';
import ConcreteClassTypeSelect, {
  ConcreteClassTypeKeys
} from '../../components/CustomSelects/concrete-class-type-select';
import { useEffect, useState } from 'react';
import {
  CalculateConcreteBendRebarAssortmentResult,
  calculateConcreteBendRebarAssortment
} from '../../calculations/2_calc-concrete-bend-rebar-assortment';
import { useAppSelector } from '../../store/hooks';
import { MPaToKgCm2 } from '../../calculations/util';
import { Duration } from '../../calculations/types';
import ConcreteBendRebarAssortmentResultLayout from '../../calculations/result-layouts/2_concrete-bend-rebar-assortment-result-layout';

export type ConcreteBendRebarAssortmentKeys =
  | 'M'
  | 'duration'
  | 'b'
  | 'h'
  | 'a'
  | 'a_c'
  | 'concrete_class'
  | 'concrete_type'
  | 'reinforcement_class'
  | 'gamma';

export interface ConcreteBendRebarAssortmentFields {
  M: string;
  duration: string;
  b: string;
  h: string;
  a: string;
  a_c: string;
  concrete_class: string;
  concrete_type: string;
  reinforcement_class: string;
  gamma: string;
}

const string_keys = ['duration', 'concrete_class', 'concrete_type', 'reinforcement_class'];

export interface ConcreteBendRebarAssortmentData {
  M: number;
  duration: string;
  b: number;
  h: number;
  a: number;
  a_c: number;
  concrete_class: string;
  concrete_type: string;
  reinforcement_class: string;
  gamma: number;
}

const initialData = {
  M: '1400000',
  duration: 'short',
  b: '30',
  h: '40',
  a: '5',
  a_c: '5',
  concrete_class: 'B20',
  concrete_type: 'heavy',
  reinforcement_class: 'A500',
  gamma: '1'
};

export default function ConcreteBendRebarAssortment() {
  const [freeGamma, setFreeGamma] = useState(false);

  const [calculationResult, setCalculationResult] = useState<
    CalculateConcreteBendRebarAssortmentResult | undefined
  >(undefined);

  const { data: concreteClassesData } = useAppSelector((state) => state.class);
  const { classes: reinforcementClassesData } = useAppSelector((state) => state.reinforcement);

  const FormSchema = Yup.object().shape({
    M: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    duration: Yup.string().required(),
    b: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(10),
    h: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(10),
    a: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(10),
    a_c: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(10),
    concrete_class: Yup.string().required(),
    concrete_type: Yup.string().required(),
    reinforcement_class: Yup.string().required(),
    gamma: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(10)
  });

  const methods = useForm<ConcreteBendRebarAssortmentFields>({
    resolver: yupResolver(FormSchema),
    defaultValues: initialData
  });

  const { formState, register, resetField } = methods;
  const { errors } = formState;

  useEffect(() => {
    if (!freeGamma) {
      resetField('gamma');
    }
  }, [freeGamma, resetField]);

  const fieldControl = function <T>(fieldName: ConcreteBendRebarAssortmentKeys) {
    return {
      ...register(fieldName),
      error: !!errors[fieldName],
      helperText: errors[fieldName]?.message,
      defaultValue: initialData[fieldName] as T
    };
  };

  const handleSubmit = methods.handleSubmit((data) => {
    try {
      // Перевод в числа
      const dataValuesToNumber = Object.entries(data).reduce((acc, [key, value]) => {
        // не переводить строки
        if (string_keys.includes(key)) {
          // @ts-ignore
          acc[key as ConcreteBendRebarAssortmentKeys] = value;
          return acc;
        }

        const num = Number.parseFloat(value);
        if (Number.isNaN(num)) {
          alert('Ошибка в данных');
          throw new Error('Ошибка в данных');
        }
        // @ts-ignore
        acc[key as ConcreteBendRebarAssortmentKeys] = num;
        return acc;
      }, {} as ConcreteBendRebarAssortmentData);

      // Поиск данных класса арматурины
      const rf = reinforcementClassesData.find((r) => r.class === data.reinforcement_class);
      if (!rf) {
        alert('Арматура не найдена');
        throw new Error('Арматура не найдена');
      }
      const { Rs, Rsc: Rsc_long, Rsc_short } = rf.resistance;
      const { Es } = rf.elasticity;

      const Rsc = data.duration === 'short' ? Rsc_short : Rsc_long;

      // Поиск данных класса бетона
      const cc = concreteClassesData.find((c) => c.name === data.concrete_class);
      if (!cc) {
        alert('Класс бетона не найден');
        throw new Error('Класс бетона не найден');
      }
      const Rb_string = cc.first_group.compression[data.concrete_type as ConcreteClassTypeKeys];
      if (!Rb_string) {
        alert('Значение сопротивления Rb для класса бетона не найдено');
        throw new Error('Значение сопротивления Rb для класса бетона не найдено');
      }
      const Rb = Number.parseFloat(Rb_string);

      // перевод Мпа в кг*см2
      const Rs_kgcm2 = MPaToKgCm2(Rs);
      const Rsc_kgcm2 = MPaToKgCm2(Rsc);
      const Rb_kgcm2 = MPaToKgCm2(Rb);
      const Es_kgcm2 = MPaToKgCm2(Es);
      // // Вычисления
      const calcResult = calculateConcreteBendRebarAssortment({
        ...dataValuesToNumber,
        duration: dataValuesToNumber.duration as Duration,
        shape: 'rectangle',
        Rs: Rs_kgcm2,
        Rsc: Rsc_kgcm2,
        Es: Es_kgcm2,
        Rb: Rb_kgcm2
      });
      // if (calcResult.error) {
      //   alert(calcResult.error);
      //   return;
      // }
      // Вывод результата
      setCalculationResult(calcResult);
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <Box m={2}>
      <form onSubmit={handleSubmit}>
        <Stack px="24px" spacing={1}>
          <Typography variant="h5">
            Подбор арматуры изгибаемого железобетонного элемента (по прочности)
          </Typography>
          <Typography variant="h6">Допущения и предпосылки</Typography>
        </Stack>

        <Stack my="16px" spacing={1}>
          <Typography>
            Методика расчета принята согласно СП 63.13330.2018 пп.8.1.8-8.1.13, а так же отдельных
            положений из «Пособия по проектированию к СП 52-101-2003». Сечение прямоугольное.
            Элемент изгибаемый. Арматура ненапрягаемая.
          </Typography>
          <Typography>
            Характеристики арматуры классов А500СП, Ау500СП и А600СП приняты согласно СТО
            36554501-065-2020*.
          </Typography>
        </Stack>

        <Stack my="16px">
          <Stack px="24px">
            <Typography variant="h6">Нагрузка</Typography>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Изгибающий момент действующий в сечении:</Typography>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">M</Typography>
              <TextField size="small" {...fieldControl('M')}></TextField>
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

          <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Продолжительность действия нагрузки:</Typography>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
              <FormControl sx={{ minWidth: '214px' }} size="small">
                <InputLabel>Продолжительность</InputLabel>
                <Select label="Продолжительность" {...fieldControl('duration')}>
                  <MenuItem value={'short'}>Кратковременная</MenuItem>
                  <MenuItem value={'long'}>Длительная</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </Stack>

        <Stack my="16px">
          <Stack px="24px">
            <Typography variant="h6">Геометрические характеристики сечения</Typography>
          </Stack>

          <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Форма поперечного сечения:</Typography>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
              <FormControl sx={{ minWidth: '214px' }} size="small">
                <InputLabel>Форма сечения</InputLabel>
                <Select label="Форма сечения" disabled value="rectangle">
                  <MenuItem value={'rectangle'}>Прямоугольное</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Ширина сечения:</Typography>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">b</Typography>
              <TextField size="small" {...fieldControl('b')}></TextField>
              <Typography color="text.secondary">см</Typography>
            </Stack>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Высота сечения:</Typography>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">h</Typography>
              <TextField size="small" {...fieldControl('h')}></TextField>
              <Typography color="text.secondary">см</Typography>
            </Stack>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Расст. от грани бетона до ц.т. растянутой арматуры:</Typography>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">a</Typography>
              <TextField size="small" {...fieldControl('a')}></TextField>
              <Typography color="text.secondary">см</Typography>
            </Stack>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Расстояние от грани бетона до ц.т. сжатой арматуры:</Typography>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">a'</Typography>
              <TextField size="small" {...fieldControl('a_c')}></TextField>
              <Typography color="text.secondary">см</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack my="16px">
          <Stack px="24px">
            <Typography variant="h6">Характеристики арматуры и бетона</Typography>
          </Stack>

          <ConcreteClassSelect {...fieldControl('concrete_class')} />

          <ConcreteClassTypeSelect {...fieldControl('concrete_type')} />

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <FormControlLabel
                control={
                  <Checkbox checked={freeGamma} onChange={() => setFreeGamma((prev) => !prev)} />
                }
                label={
                  <Typography sx={{ fontStyle: 'italic' }}>
                    Произвольный коэффициент условий работы бетона <br />
                    (γ<sub>b1</sub> · γ<sub>b3</sub> · γ<sub>b4</sub>):
                  </Typography>
                }
              />
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">
                γ<sub>bi</sub>
              </Typography>
              <TextField size="small" {...fieldControl('gamma')} disabled={!freeGamma}></TextField>
            </Stack>
          </Stack>

          <ReinforcementClassSelect {...fieldControl('reinforcement_class')} />
        </Stack>

        {calculationResult && (
          <ConcreteBendRebarAssortmentResultLayout {...calculationResult} sx={{ mb: 2 }} />
        )}

        <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap">
          <Button variant="outlined" sx={{ minWidth: '214px' }} type="submit">
            Рассчитать
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
