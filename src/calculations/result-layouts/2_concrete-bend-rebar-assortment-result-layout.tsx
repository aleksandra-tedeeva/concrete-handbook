import { Alert, AlertProps, Typography } from '@mui/material';

export interface ConcreteBendRebarAssortmentResultLayoutProps extends AlertProps {
  As?: number;
  As_c?: number;
  error?: string;
}

export default function ConcreteBendRebarAssortmentResultLayout({
  As,
  As_c,
  error,
  ...other
}: ConcreteBendRebarAssortmentResultLayoutProps) {
  return error ? (
    <Alert color="error" {...other}>
      {error}
    </Alert>
  ) : (
    <Alert color="success" {...other}>
      <Typography>
        Требуемая площадь арматуры составляет: A<sub>s</sub> = {As} cm<sup>2</sup>
      </Typography>
      {As_c ? (
        <Typography>
          A`<sub>s</sub> = {As_c} cm<sup>2</sup>
        </Typography>
      ) : (
        <Typography>Сжатой арматуры по расчету не требуется.</Typography>
      )}
    </Alert>
  );
}
