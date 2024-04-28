import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import SearchListItem from './SearchListItem';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function SearchAutocomplete() {
  // const { headers: reinforcementHeaders } = useAppSelector((state) => state.reinforcement);
  const { headers: concreteMarkHeaders } = useAppSelector((state) => state.mark);
  const { headers: concreteClassHeaders } = useAppSelector((state) => state.class);
  const navigate = useNavigate();
  const autocompleteRef = useRef<HTMLInputElement>();

  // const rHeaders = reinforcementHeaders.map((header) => ({ label: header, type: 'reinforcement' }));
  const mHeaders = concreteMarkHeaders.map((header) => ({ label: header, type: 'mark' }));
  const cHeaders = concreteClassHeaders.map((header) => ({ label: header, type: 'class' }));

  const allHeaders = [...mHeaders, ...cHeaders];

  const handleSelect = (option: { label: string; type: string }) => {
    const { label, type } = option;
    if (label && type) {
      navigate(`${type}_list/${label}`);
      autocompleteRef.current?.blur();
    }
  };

  const handleChange = () => {
    console.log('handle change');
  };

  return (
    <Autocomplete
      blurOnSelect
      clearOnBlur
      freeSolo
      id="combo-box-demo"
      options={allHeaders}
      sx={{
        width: 400,
        '.MuiAutocomplete-endAdornment': {
          color: 'white'
        }
      }}
      renderInput={(params) => (
        <TextField
          variant="standard"
          {...params}
          placeholder="Поиск по марке или классу бетона"
          InputProps={{
            ...params.InputProps,
            sx: {
              color: 'rgba(255,255,255,1)',
              ':before': { borderBottomColor: 'rgba(255,255,255,.4)' },
              ':after': {
                borderBottomColor: 'white'
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
      renderOption={(props, option) => (
        <SearchListItem option={option} onClick={() => handleSelect(option)} />
      )}
      onChange={handleChange}
    />
  );
}
