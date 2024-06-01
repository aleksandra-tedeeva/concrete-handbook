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
import { getIcon, getType } from './util';

type ValueType = { label: string; type: string } | '';

export interface SearchAutocompleteProps {
  onClose?: () => void;
  color?: string;
  faintColor?: string;
  mt?: number;
  width?: string;
}

export default function SearchAutocomplete({
  onClose,
  color = '#545454',
  faintColor = 'rgba(0,0,0,0.2)',
  mt = 0,
  width = '400px'
}: SearchAutocompleteProps) {
  const [value] = useState<ValueType | ''>('');

  const { headers: reinforcementHeaders } = useAppSelector((state) => state.reinforcement);
  const { headers: concreteMarkHeaders } = useAppSelector((state) => state.mark);
  const { headers: concreteClassHeaders } = useAppSelector((state) => state.class);
  const navigate = useNavigate();

  const rHeaders = reinforcementHeaders.map((header) => ({ label: header, type: 'reinforcement' }));
  const mHeaders = concreteMarkHeaders.map((header) => ({ label: header, type: 'mark' }));
  const cHeaders = concreteClassHeaders.map((header) => ({ label: header, type: 'class' }));

  const allHeaders = [...mHeaders, ...cHeaders, ...rHeaders];

  const handleChange = (e: any, value: string | ValueType | null) => {
    if (value === null) return;
    if (typeof value === 'string') {
      return;
    }
    const { label, type } = value;
    navigate(`${type}_list/${label}`);

    if (onClose) {
      onClose();
    }
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
        mt,
        width,
        '.MuiAutocomplete-endAdornment': {
          color
        },
        ml: 'auto',
        mr: 'auto'
      }}
      renderInput={(params) => (
        <TextField
          ref={params.InputProps.ref}
          variant="standard"
          placeholder="Поиск..."
          {...params}
          InputProps={{
            ...params.InputProps,
            sx: {
              color: color,
              ':before': { borderBottomColor: faintColor },
              ':after': {
                borderBottomColor: color
              },
              'MuiAutocomplete-endAdornment': {
                color
              }
            },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: faintColor }}>
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
            <ListItemIcon>{getIcon(option.type)}</ListItemIcon>
            <ListItemText>{option.label}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {getType(option.type)}
            </Typography>
          </MenuItem>
        );
      }}
    />
  );
}
