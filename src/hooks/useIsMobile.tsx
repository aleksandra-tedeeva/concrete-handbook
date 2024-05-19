import { Theme, useMediaQuery } from '@mui/material';

export default function useIsMobile() {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
}
