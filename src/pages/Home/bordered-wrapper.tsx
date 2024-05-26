import { Box, BoxProps, Typography } from '@mui/material';
import useIsMobile from '../../hooks/useIsMobile';

export interface BorderedWrapperProps extends BoxProps {
  children: React.ReactNode;
  label: string;
}

export default function BorderedWrapper({ children, label, ...other }: BorderedWrapperProps) {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        // background: theme.palette.primary.dark,
        border: '3px solid white',
        borderRadius: '12px',
        position: 'relative',
        p: '40px',
        width: '100%',
        height: '100%'
      }}
      {...other}
    >
      <Typography
        variant={isMobile ? 'h6' : 'h5'}
        sx={{
          color: 'white',
          position: 'absolute',
          top: '4px',
          zIndex: 1,
          left: '8px',
          padding: '0 5px'
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}
/*
input {
  border: 1px solid gray;
  border-radius: 6px;
  position: relative;
  width: 200px;
  margin: 10px;
  line-height: 6ex;
}

label {
  position: absolute;
  top: 0.2ex;
  z-index: 1;
  left: 2em;
  background-color: white;
  padding: 0 5px;
}
*/
