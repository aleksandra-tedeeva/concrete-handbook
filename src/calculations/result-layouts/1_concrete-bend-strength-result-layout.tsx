import { Alert, AlertProps, Typography } from '@mui/material';

export interface ConcreteBendStrengthResultLayoutProps extends AlertProps {
  error?: string;
  calc_result?: boolean;
  calc_result_text?: string;
  M?: number;
  Mult?: number;
}

export default function ConcreteBendStrengthResultLayout({
  M,
  Mult,
  calc_result,
  calc_result_text,
  error,
  ...other
}: ConcreteBendStrengthResultLayoutProps) {
  return error ? (
    <Alert color="error" {...other}>
      {error}
    </Alert>
  ) : (
    <Alert color={calc_result ? 'success' : 'error'} {...other}>
      <Typography>M = {M}</Typography>
      <Typography>
        M<sub>ult</sub> = {Mult}
      </Typography>
      <Typography>{calc_result_text}</Typography>
    </Alert>
  );
}
