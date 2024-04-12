import { FormControl, InputLabel, Input, InputAdornment, IconButton, SxProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export interface SearchbarProps {
  value: string;
  setValue: (val: string) => void;
  sx?: SxProps;
}

export default function Searchbar({ value, setValue, sx }: SearchbarProps) {
  const handleClearTextfield = () => {
    setValue('');
  };

  return (
    <FormControl variant="standard" fullWidth sx={sx}>
      <InputLabel htmlFor="search-input" sx={sx}>
        Поиск бетона по марке или классу
      </InputLabel>
      <Input
        sx={sx}
        id="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end" sx={sx}>
            <IconButton onClick={handleClearTextfield} edge="end">
              {value ? <CloseIcon /> : ''}
            </IconButton>
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position="start" sx={sx}>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
