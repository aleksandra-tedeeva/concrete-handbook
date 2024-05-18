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
import { useEffect, useState } from 'react';
import ReinforcementClassSelect from '../../components/CustomSelects/reinforcement-class-select';
import ConcreteClassSelect from '../../components/CustomSelects/concrete-class-select';
import ConcreteClassTypeSelect, {
  ConcreteClassTypeKeys
} from '../../components/CustomSelects/concrete-class-type-select';
import { regOnlyNumbers } from '../../util/regOnlyNumbers';
import * as Yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../store/hooks';
import calculateLocalCompression, {
  CalculateLocalCompressionResult
} from '../../calculations/9_calc-local-compression';
import { MPaToKgCm2 } from '../../calculations/util';
import { LocalCompressionDiagram, LocalCompressionLoad } from '../../calculations/types';
import LocalCompressionResultLayout from '../../calculations/result-layouts/9_local-compression-result-layout';

export type LocalCompressionKeys =
  | 'type_diagram'
  | 'N'
  | 'type_load'
  | 'a1'
  | 'a2'
  | 'c'
  | 'gamma'
  | 'concrete_class'
  | 'concrete_type'
  | 'reinforcement_class'
  | 'lx'
  | 'Asx'
  | 'nx'
  | 'ly'
  | 'Asy'
  | 'ny'
  | 's';

export interface LocalCompressionFields {
  type_diagram: string;
  N: string;
  type_load: string;
  a1: string;
  a2: string;
  c: string;
  gamma: string;

  concrete_class: string;
  concrete_type: string;

  reinforcement_class: string;

  lx?: string;
  Asx?: string;
  nx?: string;
  ly?: string;
  Asy?: string;
  ny?: string;
  s?: string;
}

export interface LocalCompressionData {
  type_diagram: string;
  N: number;
  type_load: string;
  a1: number;
  a2: number;
  c: number;
  gamma: number;

  concrete_class: string;
  concrete_type: string;

  reinforcement_class?: string;

  lx?: number;
  Asx?: number;
  nx?: number;
  ly?: number;
  Asy?: number;
  ny?: number;
  s?: number;
}

const initialData: LocalCompressionFields = {
  type_diagram: 'A',
  N: '80000',
  type_load: 'uneven',
  a1: '20',
  a2: '22',
  c: '5',
  gamma: '0.9',

  concrete_class: 'B20',
  concrete_type: 'heavy',

  reinforcement_class: 'A240',

  lx: '30',
  Asx: '0.5',
  nx: '7',
  ly: '30',
  Asy: '0.5',
  ny: '7',
  s: '5'
};

const string_keys: LocalCompressionKeys[] = [
  'type_diagram',
  'type_load',
  'concrete_class',
  'concrete_type',
  'reinforcement_class'
];

const reinforcement_keys: LocalCompressionKeys[] = [
  'reinforcement_class',
  'lx',
  'Asx',
  'nx',
  'ly',
  'Asy',
  'ny',
  's'
];

export default function LocalCompression() {
  const [cos_arm, setCosArm] = useState<boolean>(false);
  const [calculationResult, setCalculationResult] = useState<
    CalculateLocalCompressionResult | undefined
  >();

  const { data: concreteClassesData } = useAppSelector((state) => state.class);
  const { classes: reinforcementClassesData } = useAppSelector((state) => state.reinforcement);

  const FormSchema = Yup.object().shape({
    type_diagram: Yup.string().required('Выберите тип схемы'),
    N: Yup.string()
      .required('N должен быть задан')
      .matches(regOnlyNumbers, 'N должен быть числом')
      .max(20),
    type_load: Yup.string().required('Выберите распределение нагрузки'),
    a1: Yup.string()
      .required('a1 должен быть задан')
      .matches(regOnlyNumbers, 'a1 должен быть числом')
      .max(20),
    a2: Yup.string()
      .required('a2 должен быть задан')
      .matches(regOnlyNumbers, 'a2 должен быть числом')
      .max(20),
    c: Yup.string()
      .required('c должен быть задан')
      .matches(regOnlyNumbers, 'c должен быть числом')
      .max(20),
    gamma: Yup.string()
      .required('gamma должен быть задан')
      .matches(regOnlyNumbers, 'gamma должен быть числом')
      .max(20),

    concrete_class: Yup.string().required('Выберете класс бетона'),
    concrete_type: Yup.string().required('Выберете тип бетона'),

    reinforcement_class: Yup.string().required('Выберете класс арматуры'),

    lx: Yup.string().matches(regOnlyNumbers, 'lx должен быть числом').max(20),
    Asx: Yup.string().matches(regOnlyNumbers, 'Asx должен быть числом').max(20),
    nx: Yup.string().matches(regOnlyNumbers, 'nx должен быть числом').max(20),
    ly: Yup.string().matches(regOnlyNumbers, 'ly должен быть числом').max(20),
    Asy: Yup.string().matches(regOnlyNumbers, 'Asy должен быть числом').max(20),
    ny: Yup.string().matches(regOnlyNumbers, 'ny должен быть числом').max(20),
    s: Yup.string().matches(regOnlyNumbers, 's должен быть числом').max(20)
  });

  const methods = useForm<LocalCompressionFields>({
    resolver: yupResolver(FormSchema),
    defaultValues: initialData
  });

  const { formState, register, resetField } = methods;
  const { errors } = formState;

  const fieldControl = function <T>(fieldName: LocalCompressionKeys) {
    return {
      ...register(fieldName),
      error: !!errors[fieldName],
      helperText: errors[fieldName]?.message,
      defaultValue: initialData[fieldName] as T
    };
  };

  useEffect(() => {
    if (!cos_arm) {
      reinforcement_keys.forEach((key) => {
        resetField(key);
      });
    }
  }, [cos_arm, resetField]);

  const handleSubmit = methods.handleSubmit((data) => {
    try {
      // Перевод в числа
      const dataValuesToNumber = Object.entries(data).reduce((acc, [key, value]) => {
        // не переводить строки
        if (string_keys.includes(key as LocalCompressionKeys)) {
          // @ts-ignore
          acc[key] = value;
          return acc;
        }

        const num = Number.parseFloat(value);
        if (Number.isNaN(num)) {
          alert('Ошибка в данных');
          throw new Error('Ошибка в данных');
        }
        // @ts-ignore
        acc[key as ShearForceKeys] = num;
        return acc;
      }, {} as LocalCompressionData);

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

      // Поиск данных класса арматурины
      const rf = reinforcementClassesData.find((r) => r.class === data.reinforcement_class);

      if (!rf) {
        alert('Продольная арматура не найдена');
        return;
      }

      const { Rs } = rf.resistance;

      if (cos_arm) {
        const { lx, Asx, nx, ly, Asy, ny, s } = dataValuesToNumber;

        if (!lx || !Asx || !nx || !ly || !Asy || !ny || !s) {
          alert('Ошибка в данных арматуры');
          return;
        }
      }

      // перевод Мпа в кг*см2
      const Rb_kgcm2 = MPaToKgCm2(Rb);
      const Rs_kgcm2 = MPaToKgCm2(Rs);

      // // Вычисления
      const calcResult = calculateLocalCompression({
        ...dataValuesToNumber,
        type_diagram: dataValuesToNumber.type_diagram as LocalCompressionDiagram,
        type_load: dataValuesToNumber.type_load as LocalCompressionLoad,
        cos_arm,
        Rb_raw: Rb_kgcm2,
        Rsxy: Rs_kgcm2
      });

      // Вывод результата
      // console.log(calcResult);
      setCalculationResult(calcResult);
    } catch (e) {
      console.error(e);
    }
  });

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  return (
    <Box m={2}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Stack px="24px" spacing={2}>
            <Typography variant="h5">Расчет на местное сжатие</Typography>
            <Typography variant="h6">Допущения и предпосылки</Typography>
          </Stack>

          <Stack my="16px" spacing={1}>
            <Typography>
              Методика расчета принята согласно СП 63.13330.2012 пп.8.1.43-45.
            </Typography>
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
                  <Select label="Вид схемы" {...fieldControl('type_diagram')}>
                    <MenuItem value={'A'}>Схема А</MenuItem>
                    <MenuItem value={'B'}>Схема Б</MenuItem>
                    <MenuItem value={'C'}>Схема В</MenuItem>
                    <MenuItem value={'D'}>Схема Г</MenuItem>
                    <MenuItem value={'E'}>Схема Д</MenuItem>
                    <MenuItem value={'F'}>Схема Е</MenuItem>
                    <MenuItem value={'G'}>Схема Ж</MenuItem>
                    <MenuItem value={'H'}>Схема З</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
            <Box>
              <img
                alt="calc_local_compression"
                src="/assets/calc_local_compression.png"
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
                <TextField size="small" {...fieldControl('N')}></TextField>
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
                  <Select label="Распределение" {...fieldControl('type_load')}>
                    <MenuItem value={'even'}>Равномерное</MenuItem>
                    <MenuItem value={'uneven'}>Неравномерное</MenuItem>
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
                <TextField size="small" {...fieldControl('a1')}></TextField>
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
                <TextField size="small" {...fieldControl('a2')}></TextField>
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
                <TextField size="small" {...fieldControl('c')}></TextField>
                <Typography color="text.secondary">см</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack my="16px">
            <Stack px="24px">
              <Typography variant="h6">Характеристики бетона и арматуры</Typography>
            </Stack>

            <ConcreteClassSelect {...fieldControl('concrete_class')} />

            <ConcreteClassTypeSelect {...fieldControl('concrete_type')} />

            <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
              <Stack width={500}>
                <Typography>
                  Коэффициент условий работы бетона (γ<sub>b1</sub> · γ<sub>b3</sub> · γ
                  <sub>b4</sub>):
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center" py="8px">
                <Typography variant="formula">
                  γ<sub>bi</sub>
                </Typography>
                <TextField size="small" {...fieldControl('gamma')}></TextField>
              </Stack>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
              <Stack width={500} sx={{ fontStyle: 'italic' }}>
                <FormControlLabel
                  control={
                    <Checkbox checked={cos_arm} onChange={() => setCosArm((prev) => !prev)} />
                  }
                  label={<strong>Учесть косвенное армирование:</strong>}
                />
              </Stack>
            </Stack>

            <Stack
              sx={(theme) => ({
                color: cos_arm ? theme.palette.text.primary : theme.palette.text.disabled
              })}
            >
              <ReinforcementClassSelect
                disabled={!cos_arm}
                {...fieldControl('reinforcement_class')}
              />

              <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
                <Stack width={500}>
                  <Typography>Длина стержней в направлении x:</Typography>
                </Stack>
                <Stack spacing={1} direction="row" alignItems="center" py="8px">
                  <Typography variant="formula">
                    l<sub>x</sub>
                  </Typography>
                  <TextField size="small" disabled={!cos_arm} {...fieldControl('lx')}></TextField>
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
                  <TextField size="small" disabled={!cos_arm} {...fieldControl('Asx')}></TextField>
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
                  <TextField size="small" disabled={!cos_arm} {...fieldControl('nx')}></TextField>
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
                  <TextField size="small" disabled={!cos_arm} {...fieldControl('ly')}></TextField>
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
                  <TextField size="small" disabled={!cos_arm} {...fieldControl('Asy')}></TextField>
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
                  <TextField size="small" disabled={!cos_arm} {...fieldControl('ny')}></TextField>
                  <Typography color="text.secondary">шт.</Typography>
                </Stack>
              </Stack>

              <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
                <Stack width={500}>
                  <Typography>Шаг сеток:</Typography>
                </Stack>
                <Stack spacing={1} direction="row" alignItems="center" py="8px">
                  <Typography variant="formula">s</Typography>
                  <TextField size="small" disabled={!cos_arm} {...fieldControl('s')}></TextField>
                  <Typography color="text.secondary">см</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          {calculationResult && (
            <LocalCompressionResultLayout {...calculationResult} sx={{ mb: 2 }} />
          )}

          <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap">
            <Button variant="outlined" sx={{ minWidth: '214px' }} type="submit">
              Рассчитать
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Box>
  );
}
