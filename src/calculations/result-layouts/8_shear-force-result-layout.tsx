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
        Q<sub>max</sub> = {Qmax} кг {'<='} {Q} кг = Q.
      </Typography>
      <Typography>
        Требование выполняется. Прочность по полосе между наклонными трещинами обеспечена.
      </Typography>

      <Typography>
        Q<sub>max</sub> = {Qmax} кг {'<='} {Qult} кг = Q<sub>ult</sub>.
      </Typography>
      <Typography>
        Требование выполняется. Прочность наклонного сечения на действие поперечной силы обеспечена.
      </Typography>

      <Typography>
        M = {M} кг · см {'<='} {Mult} кг · см = M<sub>ult</sub>.
      </Typography>
      <Typography>
        Требование выполняется. Прочность наклонного сечения на действие момента обеспечена.
      </Typography>
    </Alert>
  );
}
