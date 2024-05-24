import { Alert, AlertProps, Typography } from '@mui/material';

export interface ShearForceResultLayoutProps extends AlertProps {
  Q?: number;
  Qmax?: number;
  Qult?: number;
  M?: number;
  Mult?: number;
  error?: string;
}

export default function ShearForceResultLayout({
  Q,
  Qmax,
  Qult,
  M,
  Mult,
  error,
  ...other
}: ShearForceResultLayoutProps) {
  return error ? (
    <Alert color="error" {...other}>
      {error}
    </Alert>
  ) : (
    <Alert color="success" {...other}>
      <Typography>
        Q<sub>max</sub> = {Qmax} кг {'<='} φ<sub>n</sub>φ<sub>b1</sub>R<sub>b</sub>bh<sub>0</sub> ={' '}
        {Q} кг.
      </Typography>
      <Typography>
        Требование выполняется. Прочность по полосе между наклонными трещинами обеспечена.
      </Typography>

      <Typography>
        Q<sub>max</sub> = {Qmax} кг {'<='} Q<sub>b</sub> + Q<sub>sw</sub> + qC = {Qult} кг.
      </Typography>
      <Typography>
        Требование выполняется. Прочность наклонного сечения на действие поперечной силы обеспечена.
      </Typography>

      <Typography>
        M = {M} кг · см {'<='} M<sub>s</sub> + M<sub>sw</sub> = {Mult} кг · см.
      </Typography>
      <Typography>
        Требование выполняется. Прочность наклонного сечения на действие момента обеспечена.
      </Typography>
    </Alert>
  );
}
