import { Theme, useMediaQuery } from '@mui/material';
import useIsMobile from './useIsMobile';

export default function useResponsiveSize() {
  const isMobile = useIsMobile();
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.between('md', 'lg'));

  let xs = 4;
  if (isTablet) {
    xs = 6;
  }
  if (isMobile) {
    xs = 12;
  }

  return { xs, isMobile, isTablet };
}
