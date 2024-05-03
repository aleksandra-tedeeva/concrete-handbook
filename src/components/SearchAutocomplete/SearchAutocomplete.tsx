import {
  Autocomplete,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import IconC from '../../icons/icon-c';
import IconG from '../../icons/icon-g';

type ValueType = { label: string; type: string } | '';

export default function SearchAutocomplete() {
  const [value] = useState<ValueType | ''>('');

  // const { headers: reinforcementHeaders } = useAppSelector((state) => state.reinforcement);
  const { headers: concreteMarkHeaders } = useAppSelector((state) => state.mark);
  const { headers: concreteClassHeaders } = useAppSelector((state) => state.class);
  const navigate = useNavigate();
  // const autocompleteRef = useRef<HTMLInputElement>();

  // const rHeaders = reinforcementHeaders.map((header) => ({ label: header, type: 'reinforcement' }));
  const mHeaders = concreteMarkHeaders.map((header) => ({ label: header, type: 'mark' }));
  const cHeaders = concreteClassHeaders.map((header) => ({ label: header, type: 'class' }));

  const allHeaders = [...mHeaders, ...cHeaders];

  const handleChange = (e: any, value: string | ValueType | null) => {
    if (value === null) return;
    if (typeof value === 'string') {
      return;
    }
    const { label, type } = value;
    navigate(`${type}_list/${label}`);
  };

  return (
    <Autocomplete
      key="search-autocomplete"
      value={value}
      onChange={(e, val) => handleChange(e, val)}
      isOptionEqualToValue={(option, value) =>
        option && value ? option.label === value.label : false
      }
      blurOnSelect
      clearOnBlur
      noOptionsText="Нет доступных вариантов"
      getOptionLabel={(option) => option && option.label}
      id="combo-box-demo"
      options={allHeaders as ValueType[]}
      sx={{
        width: 400,
        '.MuiAutocomplete-endAdornment': {
          color: 'white'
        }
      }}
      renderInput={(params) => (
        <TextField
          ref={params.InputProps.ref}
          variant="standard"
          placeholder="Поиск по марке или классу бетона"
          {...params}
          InputProps={{
            ...params.InputProps,
            sx: {
              color: 'rgba(255,255,255,1)',
              ':before': { borderBottomColor: 'rgba(255,255,255,.4)' },
              ':after': {
                borderBottomColor: 'white'
              },
              'MuiAutocomplete-endAdornment': {
                color: 'white'
              }
            },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: 'rgba(255,255,255,.4)' }}>
                <Search />
              </InputAdornment>
            )
          }}
        />
      )}
      renderOption={(props, option) => {
        if (!option) return;
        return (
          <MenuItem {...props}>
            <ListItemIcon>
              {option.type === 'mark' ? (
                <IconG sx={{ width: '16px', height: '16px' }} />
              ) : (
                <IconC sx={{ width: '16px', height: '16px' }} />
              )}
            </ListItemIcon>
            <ListItemText>{option.label}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {option.type === 'mark' ? 'Марка бетона' : 'Класс бетона'}
            </Typography>
          </MenuItem>
        );
      }}
    />
  );
}
