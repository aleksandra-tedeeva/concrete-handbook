import { Dialog, DialogProps, IconButton, Stack } from '@mui/material';

import SearchAutocomplete from './SearchAutocomplete';
import { Close } from '@mui/icons-material';

export default function MobileSearchAutocomplete({ onClose, ...props }: DialogProps) {
  const handleClose = () => {
    // @ts-ignore
    onClose();
  };

  return (
    <Dialog fullScreen {...props}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" px={2}>
        <SearchAutocomplete
          onClose={handleClose}
          color="black"
          faintColor="rgba(0,0,0,0.4)"
          mt={1}
          width="360px"
        />
        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
          <Close />
        </IconButton>
      </Stack>
    </Dialog>
  );
}
