import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  TextField,
  Tooltip,
  Checkbox,
  Button,
  Theme,
  useMediaQuery
} from '@mui/material';
import ComplexConcreteClassSelect, {
  ComplexConcreteClassSelectResult
} from '../../components/CustomSelects/complex-concrete-class-select';
import { useEffect, useState } from 'react';
import ReinforcementClassSelect from '../../components/CustomSelects/reinforcement-class-select';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { regOnlyNumbers } from '../../util/regOnlyNumbers';
import { MPaToKgCm2 } from '../../calculations/util';
import { useAppSelector } from '../../store/hooks';
import CalculateShearForce, {
  CalculateShearForceResult
} from '../../calculations/8_calc-shear-force';
import ShearForceResultLayout from '../../calculations/result-layouts/8_shear-force-result-layout';

export type ShearForceKeys =
  | 'M'
  | 'Qmax'
  | 'N'
  | 'q'
  | 'h'
  | 'b'
  | 'a'
  | 'a_c'
  | 'As'
  | 'As_c'
  | 'Asw'
  | 'sw'
  | 'gamma'
  | 'reinforcement_lateral'
  | 'reinforcement_transverse';

const string_keys = ['reinforcement_lateral', 'reinforcement_transverse'];

export interface ShearForceFields {
  M: string;
  Qmax: string;
  N: string;
  q: string;

  h: string;
  b: string;
  a: string;
  a_c: string;

  As: string;
  As_c: string;
  Asw: string;
  sw: string;

  gamma: string;

  reinforcement_lateral: string;
  reinforcement_transverse: string;
}

export interface ShearForceData {
  M: number;
  Qmax: number;
  N: number;
  q: number;

  h: number;
  b: number;
  a: number;
  a_c: number;

  As: number;
  As_c: number;
  Asw: number;
  sw: number;

  gamma: number;

  reinforcement_lateral: string;
  reinforcement_transverse: string;

  Rb?: string;
  Rbt?: string;
  Eb?: string;
}

const initialData = {
  M: '550000',
  Qmax: '20000',
  N: '-3000',
  q: '10',

  h: '60',
  b: '30',
  a: '4',
  a_c: '4',

  As: '10',
  As_c: '3',
  Asw: '2.1',
  sw: '20',

  gamma: '1',

  reinforcement_lateral: 'A400',
  reinforcement_transverse: 'A240'
};

export default function ShearForce() {
  const [freeGamma, setFreeGamma] = useState(false);
  const [concreteClassData, setConcreteClassData] = useState<ComplexConcreteClassSelectResult>();
  const [calculationResult, setCalculationResult] = useState<CalculateShearForceResult | undefined>(
    undefined
  );

  const { classes: reinforcementClassesData } = useAppSelector((state) => state.reinforcement);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const FormSchema = Yup.object().shape({
    M: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    Qmax: Yup.string()
      .required('Qmax должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    N: Yup.string()
      .required('N должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    q: Yup.string()
      .required('q должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),

    h: Yup.string()
      .required('h должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    b: Yup.string()
      .required('b должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    a: Yup.string()
      .required('a должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    a_c: Yup.string()
      .required('a_c должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),

    As: Yup.string()
      .required('As должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    As_c: Yup.string()
      .required('As_c должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    Asw: Yup.string()
      .required('Asw должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    sw: Yup.string()
      .required('sw должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    gamma: Yup.string()
      .required('gamma должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    reinforcement_lateral: Yup.string().required('продольная арматура должна быть задана'),
    reinforcement_transverse: Yup.string().required('поперечная арматура должна быть задана')
  });

  const methods = useForm<ShearForceFields>({
    resolver: yupResolver(FormSchema),
    defaultValues: initialData
  });

  const { formState, register, resetField } = methods;
  const { errors } = formState;

  const fieldControl = function <T>(fieldName: ShearForceKeys) {
    return {
      ...register(fieldName),
      error: !!errors[fieldName],
      helperText: errors[fieldName]?.message,
      defaultValue: initialData[fieldName] as T
    };
  };

  const handleSubmit = methods.handleSubmit((data) => {
    try {
      if (!concreteClassData) {
        alert('Бетон не выбран');
        return;
      }

      const { Rb, Rbt, Eb } = concreteClassData;

      if (!Rb) {
        alert('Значение Rb для класса бетона не найдено.');
        return;
      }

      if (!Rbt) {
        alert('Значение Rbt для класса бетона не найдено.');
        return;
      }

      if (!Eb) {
        alert('Значение Eb для класса бетона не найдено.');
        return;
      }

      //data = {...data, Rb, Rbt, Eb}

      // Перевод в числа
      const dataValuesToNumber = Object.entries({ ...data, Rb, Rbt, Eb }).reduce(
        (acc, [key, value]) => {
          // не переводить строки
          if (string_keys.includes(key)) {
            // @ts-ignore
            acc[key as ShearForceKeys] = value;
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
        },
        {} as ShearForceData
      );

      // Поиск данных класса арматурины
      const lateral = reinforcementClassesData.find((r) => r.class === data.reinforcement_lateral);
      const transverse = reinforcementClassesData.find(
        (r) => r.class === data.reinforcement_transverse
      );

      if (!lateral) {
        alert('Продольная арматура не найдена');
        return;
      }

      const { Rs } = lateral.resistance;
      const { Es } = lateral.elasticity;

      if (!transverse) {
        alert('Продольная арматура не найдена');
        return;
      }

      const { Rsw } = transverse.resistance;

      // перевод Мпа в кг*см2
      const Rb_kgcm2 = MPaToKgCm2(dataValuesToNumber.Rb as unknown as number);
      const Rbt_kgcm2 = MPaToKgCm2(dataValuesToNumber.Rbt as unknown as number);
      const Eb_kgcm2 = MPaToKgCm2(dataValuesToNumber.Eb as unknown as number);

      const Rs_kgcm2 = MPaToKgCm2(Rs);
      const Rsw_kgcm2 = MPaToKgCm2(Rsw);
      const Es_kgcm2 = MPaToKgCm2(Es);
      // // Вычисления
      const calcResult = CalculateShearForce({
        ...dataValuesToNumber,
        Rb: Rb_kgcm2,
        Rbt: Rbt_kgcm2,
        Eb: Eb_kgcm2,
        Rs: Rs_kgcm2,
        Rsw: Rsw_kgcm2,
        Es: Es_kgcm2
      });

      // Вывод результата
      // console.log(calcResult);
      setCalculationResult(calcResult);
    } catch (e) {
      console.error(e);
    }
  });

  useEffect(() => {
    if (!freeGamma) {
      resetField('gamma');
    }
  }, [freeGamma, resetField]);

  const handleConcreteClassChange = (result: ComplexConcreteClassSelectResult) => {
    console.log('onChange', result);
    setConcreteClassData(result);
  };

  return (
    <Box m={2}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Stack px="24px" spacing={2}>
            <Typography variant="h5">
              Расчет по прочности железобетонного элемента при действии поперечной силы
            </Typography>
            <Typography variant="h6">Допущения и предпосылки</Typography>
          </Stack>

          <Stack my="16px" spacing={1}>
            <Typography>
              Расчет производится согласно СП 63.13330.2012 (изм. 1, 2) п.п. 8.1.32 - 8.1.35.
              Поперечная арматура на рассматриваемом участке установлена с постоянным шагом.
            </Typography>
            <Typography>
              Характеристики арматуры классов А500СП, Ау500СП и А600СП приняты согласно СТО
              36554501-065-2020*.
            </Typography>
          </Stack>

          <Stack my="16px">
            <Box>
              <img
                alt="calc_shear_force"
                src="/assets/calc_shear_force.png"
                width={isMobile ? '280px' : '350px'}
              />
            </Box>
          </Stack>

          <Stack my="16px">
            <Stack px="24px">
              <Typography variant="h6">Внешние усилия</Typography>
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

            <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
              <Stack width={500}>
                <Typography>Максимальная поперечная сила в начале наклонной трещины:</Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center" py="8px">
                <Typography variant="formula">
                  Q<sub>max</sub>
                </Typography>
                <TextField size="small" {...fieldControl('Qmax')}></TextField>
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

            <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
              <Stack width={500}>
                <Typography>Равномерная нагрузка на верхней грани балки:</Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center" py="8px">
                <Typography variant="formula">q</Typography>
                <TextField size="small" {...fieldControl('q')}></TextField>
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
                <Typography>Защитный слой бетона растянутой зоны:</Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center" py="8px">
                <Typography variant="formula">a</Typography>
                <TextField size="small" {...fieldControl('a')}></TextField>
                <Typography color="text.secondary">см</Typography>
              </Stack>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
              <Stack width={500}>
                <Typography>Защитный слой бетона сжатой зоны:</Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center" py="8px">
                <Typography variant="formula">a'</Typography>
                <TextField size="small" {...fieldControl('a_c')}></TextField>
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
                <TextField size="small" {...fieldControl('As')}></TextField>
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
                <TextField size="small" {...fieldControl('As_c')}></TextField>
                <Typography color="text.secondary">
                  см<sup>2</sup>
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
              <Stack width={500}>
                <Typography>Площадь поперечной арматуры:</Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center" py="8px">
                <Typography variant="formula">
                  A<sub>sw</sub>
                </Typography>
                <TextField size="small" {...fieldControl('Asw')}></TextField>
                <Typography color="text.secondary">
                  см<sup>2</sup>
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
              <Stack width={500}>
                <Typography>Шаг поперечной армаруры:</Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center" py="8px">
                <Typography variant="formula">
                  s<sub>w</sub>
                </Typography>
                <TextField size="small" {...fieldControl('sw')}></TextField>
                <Typography color="text.secondary">см</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack my="16px">
            <Stack px="24px">
              <Typography variant="h6">Характеристики бетона и арматуры</Typography>
            </Stack>

            <ComplexConcreteClassSelect onChange={handleConcreteClassChange} />

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
                <TextField
                  size="small"
                  disabled={!freeGamma}
                  sx={{ maxWidth: '214px' }}
                  {...fieldControl('gamma')}
                ></TextField>
              </Stack>
            </Stack>

            <ReinforcementClassSelect
              text="Класс продольной арматуры"
              {...fieldControl('reinforcement_lateral')}
            />
            <ReinforcementClassSelect
              text="Класс поперечной арматуры"
              {...fieldControl('reinforcement_transverse')}
            />
          </Stack>

          {calculationResult && <ShearForceResultLayout {...calculationResult} sx={{ mb: 2 }} />}

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
