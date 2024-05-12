import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  SelectChangeEvent,
  Alert
} from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useForm } from 'react-hook-form';
import {
  CalculateConcreteBendStrengthResult,
  calculateConcreteBendStrength
} from '../../calculations/1_calc-concrete-bend-strength';
import { Duration, Shape } from '../../calculations/types';
import { MPaToKgCm2 } from '../../calculations/util';

export type ConcreteBendStrengthKeys =
  | 'M'
  | 'b'
  | 'bf'
  | 'h'
  | 'hf'
  | 'a'
  | 'a_c'
  | 'As'
  | 'As_c'
  | 'gamma';

export type ConcreteClassTypeKeys = 'heavy' | 'light' | 'cellular';

export interface ConcreteBendStrengthFields {
  M: string;
  b: string;
  bf?: string;
  h: string;
  hf?: string;
  a: string;
  a_c: string;
  As: string;
  As_c: string;
  gamma: string;
}

export interface ConcreteBendStrengthNumbers {
  M: number;
  b: number;
  bf?: number;
  h: number;
  hf?: number;
  a: number;
  a_c: number;
  As: number;
  As_c: number;
  gamma: number;
}

export interface ConcreteClassType {
  key: ConcreteClassTypeKeys;
  name: string;
}

const initialData: ConcreteBendStrengthFields = {
  M: '1400000',
  b: '30',
  bf: '90',
  h: '40',
  hf: '10',
  a: '5',
  a_c: '5',
  As: '12',
  As_c: '3',
  gamma: '1'
};

const concreteClassTypes: ConcreteClassType[] = [
  {
    key: 'heavy',
    name: 'Тяжелый и мелкозернистый и напрягающий'
  },
  {
    key: 'light',
    name: 'Легкий'
  },
  {
    key: 'cellular',
    name: 'Ячеистый'
  }
];

const regOnlyNumbers = new RegExp('^[0-9-]+$');

export default function ConcreteBendStrength() {
  const [duration, setDuration] = useState<Duration>('short');
  const [shape, setShape] = useState<Shape>('rectangle');
  const [concreteClass, setConcreteClass] = useState('B20');
  const [concreteClassType, setConcreteClassType] = useState<ConcreteClassTypeKeys>('heavy');
  const [reinforcement, setReinforcement] = useState('A500');
  const [freeGamma, setFreeGamma] = useState(false);

  const [calculationResult, setCalculationResult] = useState<
    CalculateConcreteBendStrengthResult | undefined
  >(undefined);

  const { headers: concreteClasses, data: concreteClassesData } = useAppSelector(
    (state) => state.class
  );
  const { headers: reinforcementClasses, classes: reinforcementClassesData } = useAppSelector(
    (state) => state.reinforcement
  );

  const FormSchema = Yup.object().shape({
    M: Yup.string()
      .required('M должен быть задан')
      .matches(regOnlyNumbers, 'M должен быть числом')
      .max(20),
    b: Yup.string()
      .required('b должен быть задан')
      .matches(regOnlyNumbers, 'b должен быть числом')
      .max(10),
    bf:
      shape === 't-beam'
        ? Yup.string()
            .required('bf должен быть задан')
            .matches(regOnlyNumbers, 'bf должен быть числом')
            .max(10)
        : Yup.string(),
    h: Yup.string()
      .required('h должен быть задан')
      .matches(regOnlyNumbers, 'h должен быть числом')
      .max(10),
    hf:
      shape === 't-beam'
        ? Yup.string()
            .required('hf должен быть задан')
            .matches(regOnlyNumbers, 'hf должен быть числом')
            .max(10)
        : Yup.string(),
    a: Yup.string()
      .required('a должен быть задан')
      .matches(regOnlyNumbers, 'a должен быть числом')
      .max(10),
    a_c: Yup.string()
      .required('a` должен быть задан')
      .matches(regOnlyNumbers, 'a` должен быть числом')
      .max(10),
    As: Yup.string()
      .required('As должен быть задан')
      .matches(regOnlyNumbers, 'As должен быть числом')
      .max(10),
    As_c: Yup.string()
      .required('A`s должен быть задан')
      .matches(regOnlyNumbers, 'A`s должен быть числом')
      .max(10),
    gamma: Yup.string()
      .required('Gamma должен быть задан')
      .matches(regOnlyNumbers, 'Gamma должен быть числом')
      .max(10)
  });

  const methods = useForm<ConcreteBendStrengthFields>({
    resolver: yupResolver(FormSchema),
    defaultValues: initialData
  });

  const { formState, register } = methods;
  const { errors } = formState;

  const fieldControl = function <T>(fieldName: ConcreteBendStrengthKeys) {
    return {
      ...register(fieldName),
      error: !!errors[fieldName],
      helperText: errors[fieldName]?.message,
      defaultValue: initialData[fieldName] as T
    };
  };

  const handleSubmit = methods.handleSubmit((data) => {
    try {
      // Игнорировать bf и hf для прямоугольного сечения
      if (shape === 'rectangle') {
        data.bf = '1';
        data.hf = '1';
      }

      // Перевод в числа
      const dataValuesToNumber = Object.entries(data).reduce((acc, [key, value]) => {
        const num = Number.parseFloat(value);
        if (Number.isNaN(num)) {
          alert('Ошибка в данных');
          throw new Error('Ошибка в данных');
        }
        acc[key as ConcreteBendStrengthKeys] = num;
        return acc;
      }, {} as ConcreteBendStrengthNumbers);

      // Поиск данных класса арматурины
      const rf = reinforcementClassesData.find((r) => r.class === reinforcement);
      if (!rf) {
        alert('Арматура не найдена');
        throw new Error('Арматура не найдена');
      }
      const { Rs, Rsc, Rsc_short } = rf.resistance;
      const { Es } = rf.elasticity;

      // Поиск данных класса бетона
      const cc = concreteClassesData.find((c) => c.name === concreteClass);
      if (!cc) {
        alert('Класс бетона не найден');
        throw new Error('Класс бетона не найден');
      }
      const Rb_string = cc.first_group.compression[concreteClassType];
      if (!Rb_string) {
        alert('Значение сопротивления Rb для класса бетона не найдено');
        throw new Error('Значение сопротивления Rb для класса бетона не найдено');
      }
      const Rb = Number.parseFloat(Rb_string);

      const Rbt_string = cc.first_group.expansion[concreteClassType];
      if (!Rbt_string) {
        alert('Значение сопротивления Rbt для класса бетона не найдено');
        throw new Error('Значение сопротивления Rbt для класса бетона не найдено');
      }
      const Rbt = Number.parseFloat(Rb_string);

      // перевод Мпа в кг*см2
      const Rs_kgcm2 = MPaToKgCm2(Rs);
      const Rsc_kgcm2 = MPaToKgCm2(duration === 'short' ? Rsc_short : Rsc);
      const Rb_kgcm2 = MPaToKgCm2(Rb);
      const Rbt_kgcm2 = MPaToKgCm2(Rbt);
      const Es_kgcm2 = MPaToKgCm2(Es);

      // Вычисления
      const calcResult = calculateConcreteBendStrength({
        ...dataValuesToNumber,
        duration,
        shape,
        Rs: Rs_kgcm2,
        Rsc: Rsc_kgcm2,
        Es: Es_kgcm2,
        Rb: Rb_kgcm2,
        Rbt: Rbt_kgcm2
      });

      if (calcResult.error) {
        alert(calcResult.error);
        return;
      }

      // Вывод результата
      setCalculationResult(calcResult);
    } catch (e) {
      console.error(e);
    }
  });

  const handleDurationChange = (e: SelectChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target.value) {
      const value = target.value as Duration;
      setDuration(value);
    }
  };

  const handleShapeChange = (e: SelectChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target.value) {
      const value = target.value as Shape;
      setShape(value);
    }
  };

  const handleConcreteClassChange = (e: SelectChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target.value) {
      const value = target.value;
      setConcreteClass(value);
    }
  };

  const handleConcreteClassTypeChange = (e: SelectChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target.value) {
      const value = target.value;
      setConcreteClassType(value as ConcreteClassTypeKeys);
    }
  };

  const handleFreeGammaChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setFreeGamma(e.target.checked);
    }
  };

  const handleReinforcementChange = (e: SelectChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target.value) {
      const value = target.value;
      setReinforcement(value);
    }
  };

  /** RENDERERS */
  const renderRectangleShapeBHFields = (
    <>
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
    </>
  );

  const renderTBeamShapeBHFields = (
    <>
      <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
        <Stack width={500}>
          <Typography>Ширина полки тавра:</Typography>
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center" py="8px">
          <Typography variant="formula">
            b<sub>f</sub>
          </Typography>
          <TextField size="small" {...fieldControl('bf')}></TextField>
          <Typography color="text.secondary">см</Typography>
        </Stack>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
        <Stack width={500}>
          <Typography>Высота полки тавра:</Typography>
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center" py="8px">
          <Typography variant="formula">
            h<sub>f</sub>
          </Typography>
          <TextField size="small" {...fieldControl('hf')}></TextField>
          <Typography color="text.secondary">см</Typography>
        </Stack>
      </Stack>
    </>
  );

  return (
    <Box m={2}>
      <form onSubmit={handleSubmit}>
        <Stack px="24px" spacing={1}>
          <Typography variant="h5">Проверка прочности изгибаемого ж.б. элемента</Typography>
          <Typography variant="h6">Допущения и предпосылки</Typography>
        </Stack>

        <Stack my="16px" spacing={1}>
          <Typography>
            Методика расчета принята согласно СП 63.13330.2018 пп.8.1.8-8.1.13. Сечение
            прямоугольное либо тавровое с полкой в сжатой зоне. Элемент изгибаемый. Арматура
            ненапрягаемая.
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

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Изгибающий момент действующий в сечении:</Typography>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">M</Typography>
              <TextField size="small" {...fieldControl('M')} />
              <Typography color="text.secondary">кН · м</Typography>
            </Stack>
          </Stack>

          <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Продолжительность действия нагрузки:</Typography>
              <Typography variant="body2">
                (при кратковременной нагрузке Rsc имеет пониженное значение)
              </Typography>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
              <FormControl sx={{ minWidth: '214px' }} size="small">
                <InputLabel>Продолжительность</InputLabel>
                <Select label="Продолжительность" value={duration} onChange={handleDurationChange}>
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
                <Select label="Форма сечения" value={shape} onChange={handleShapeChange} disabled>
                  <MenuItem value={'rectangle'}>Прямоугольное</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          {renderRectangleShapeBHFields}
          {shape === 't-beam' && renderTBeamShapeBHFields}

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
        </Stack>

        <Stack my="16px">
          <Stack px="24px">
            <Typography variant="h6">Характеристики арматуры и бетона</Typography>
          </Stack>

          <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Класс бетона на сжатие:</Typography>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
              <FormControl sx={{ minWidth: '214px' }} size="small">
                <InputLabel>Класс бетона</InputLabel>
                <Select
                  label="Класс бетона"
                  value={concreteClass}
                  onChange={handleConcreteClassChange}
                >
                  {concreteClasses.map((cl) => (
                    <MenuItem key={cl} value={cl}>
                      {cl}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Тип бетона на сжатие:</Typography>
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
              <FormControl sx={{ minWidth: '214px' }} size="small">
                <InputLabel>Тип бетона</InputLabel>
                <Select
                  label="Тип бетона"
                  value={concreteClassType}
                  onChange={handleConcreteClassTypeChange}
                  sx={{ maxWidth: '216px' }}
                >
                  {concreteClassTypes.map(({ key, name }) => (
                    <MenuItem key={key} value={key}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <FormControlLabel
                control={<Checkbox checked={freeGamma} onChange={handleFreeGammaChange} />}
                label={
                  <Typography sx={{ fontStyle: 'italic' }}>
                    Произвольный коэффициент условий работы бетона: <br />
                    (γ<sub>b1</sub> · γ<sub>b3</sub> · γ<sub>b4</sub>)
                  </Typography>
                }
              />
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" py="8px">
              <Typography variant="formula">
                γ<sub>bi</sub>
              </Typography>
              <TextField size="small" disabled={!freeGamma} {...fieldControl('gamma')}></TextField>
            </Stack>
          </Stack>

          <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
            <Stack width={500}>
              <Typography>Класс арматуры:</Typography>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
              <FormControl sx={{ minWidth: '214px' }} size="small">
                <InputLabel>Класс арматуры</InputLabel>
                <Select
                  label="Класс арматуры"
                  value={reinforcement}
                  onChange={handleReinforcementChange}
                >
                  {reinforcementClasses.map((cl) => (
                    <MenuItem key={cl} value={cl}>
                      {cl}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </Stack>

        {calculationResult && (
          <Alert color={calculationResult?.calc_result ? 'success' : 'error'} sx={{ mb: 2 }}>
            <Typography>M = {calculationResult.M}</Typography>
            <Typography>
              M<sub>ult</sub> = {calculationResult.Mult}
            </Typography>
            <Typography>{calculationResult.calc_result_text}</Typography>
          </Alert>
        )}

        <Button variant="outlined" sx={{ minWidth: '214px' }} type="submit">
          Рассчитать
        </Button>
      </form>
    </Box>
  );
}
