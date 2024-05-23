import { AppBar, Dialog, DialogProps, IconButton, Toolbar, Typography } from '@mui/material';

import SearchAutocomplete from './SearchAutocomplete';
import { Close } from '@mui/icons-material';

export default function MobileSearchAutocomplete({ onClose, ...props }: DialogProps) {
  const handleClose = () => {
    // @ts-ignore
    onClose();
  };

  return (
    <Dialog fullScreen {...props}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar sx={{ dispaly: 'flex', justifyContent: 'space-between' }}>
          <Typography>Поиск класса/марки бетона и арматуры</Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SearchAutocomplete
        onClose={handleClose}
        color="black"
        faintColor="rgba(0,0,0,0.4)"
        mt={1}
        width="360px"
      />
    </Dialog>
  );
}
