import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import ConcreteClassSelect from './concrete-class-select';
import { keyToNameMap } from './complex-concrete-class-bindings';

export interface ComplexConcreteClassSelectInitialData {
  concreteClass?: string;
  concreteType?: string;
  concreteSubtype?: string;
}

export interface ComplexConcreteClassSelectProps {
  initialData?: ComplexConcreteClassSelectInitialData;
  onChange: (result: ComplexConcreteClassSelectResult) => void;
}

const defaultInitialData = {
  concreteClass: 'B20',
  concreteType: 'heavy',
  concreteSubtype: ''
};

const concreteTypesMap = new Map<string, string>([
  ['heavy', 'heavy'],
  ['light_grain', 'light'],
  ['light_aerated_by_density', 'light'],
  ['cellular_autoclave_by_density', 'cellular']
]);

export type ConcreteTypeKeys =
  | 'heavy'
  | 'light_grain'
  | 'light_aerated_by_density'
  | 'cellular_autoclave_by_density';

export interface ComplexConcreteClassSelectResult {
  Rb: string | undefined;
  Rbt: string | undefined;
  Rbn: string | undefined;
  Rbtn: string | undefined;
  Eb: string | undefined;
}

export default function ComplexConcreteClassSelect({
  onChange,
  initialData = defaultInitialData
}: ComplexConcreteClassSelectProps) {
  const { data } = useAppSelector((state) => state.class);
  const [concreteClass, setConcreteClass] = useState<string>(initialData.concreteClass!);
  const [concreteType, setConcreteType] = useState<ConcreteTypeKeys>(
    initialData.concreteType! as ConcreteTypeKeys
  );
  const [concreteSubtype, setConcreteSubtype] = useState<string>(initialData.concreteSubtype!);

  const classData = concreteClass ? data.find((el) => el.name === concreteClass) : undefined;

  const typeData: string[] = classData
    ? Object.entries(classData.resilience).map(([key, val]) => val && key)
    : [];

  const subtypeData =
    // @ts-ignore
    concreteType && classData && typeof classData.resilience[concreteType] !== 'string'
      ? // @ts-ignore
        Object.entries(classData.resilience[concreteType]).map(([key, val]) => val && key && key)
      : [];

  const handleChange = () => {
    let result: ComplexConcreteClassSelectResult = {
      Rb: undefined,
      Rbt: undefined,
      Rbn: undefined,
      Rbtn: undefined,
      Eb: undefined
    };
    if (classData) {
      if (concreteType) {
        const key = concreteTypesMap.get(concreteType)! as 'light' | 'heavy' | 'cellular';
        const Rb = classData.first_group.compression[key];
        const Rbt = classData.first_group.expansion[key];
        const Rbn = classData.second_group.compression[key];
        const Rbtn = classData.second_group.expansion[key];

        result = {
          ...result,
          Rb,
          Rbt,
          Rbn,
          Rbtn
        };

        const Eb_data = classData.resilience[concreteType];
        if (concreteType === 'heavy') {
          result = {
            ...result,
            Eb: Eb_data as string
          };
        }

        if (concreteSubtype) {
          // @ts-ignore
          const Eb = Eb_data[concreteSubtype] as string;
          result = {
            ...result,
            Eb
          };
        }
      }
    }
    onChange(result);
  };

  const handleConcreteClassChange = (e: SelectChangeEvent<unknown>) => {
    const target = e.target as HTMLSelectElement;
    setConcreteClass(target.value);
    setConcreteType('heavy');
    setConcreteSubtype('');
  };

  const handleConcreteTypeChange = (e: SelectChangeEvent) => {
    setConcreteType(e.target.value as ConcreteTypeKeys);
  };

  const handleConcreteSubtypeChange = (e: SelectChangeEvent) => {
    setConcreteSubtype(e.target.value);
  };

  useEffect(() => {
    if (concreteClass && concreteType) {
      handleChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [concreteClass, concreteType, concreteSubtype]);

  const renderConcreteTypeSelect = (
    <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
      <Stack width={500}>
        <Typography>Тип бетона:</Typography>
      </Stack>
      <Stack>
        <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
          <FormControl sx={{ minWidth: '214px' }} size="small">
            <Select
              value={concreteType}
              onChange={handleConcreteTypeChange}
              sx={{ maxWidth: '214px' }}
            >
              {typeData.map((key) => {
                // @ts-ignore
                const availableSubtypes = Object.values(classData!.resilience[key]).filter(
                  (subtype) => subtype
                );

                if (!availableSubtypes.length) {
                  return null;
                }

                return (
                  <MenuItem key={key} value={key}>
                    {keyToNameMap.get(key)}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderConcreteSubtypeSelect = subtypeData.find((el) => el) ? (
    <Stack spacing={3.8} direction="row" alignItems="center" flexWrap="wrap">
      <Stack width={500}>
        <Typography>Группа/плотность бетона:</Typography>
      </Stack>
      <Stack>
        <Stack spacing={1} direction="row" alignItems="center" pl={4.2} py="8px">
          <FormControl sx={{ minWidth: '214px' }} size="small">
            <Select
              value={concreteSubtype}
              onChange={handleConcreteSubtypeChange}
              sx={{ maxWidth: '214px' }}
            >
              {subtypeData.map((key, idx) =>
                key ? (
                  <MenuItem key={idx} value={key as string}>
                    {keyToNameMap.get(key as string)}
                  </MenuItem>
                ) : null
              )}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  ) : null;

  return (
    <Stack>
      <ConcreteClassSelect value={concreteClass} onChange={handleConcreteClassChange} />

      {concreteClass && renderConcreteTypeSelect}
      {concreteType && concreteType !== 'heavy' && renderConcreteSubtypeSelect}
    </Stack>
  );
}
