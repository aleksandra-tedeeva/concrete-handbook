import { Alert, AlertProps, Typography } from '@mui/material';

export interface LocalCompressionResultLayoutProps extends AlertProps {
  error?: string;
  Rb_loc?: number;
  fi_sxy?: number;
  Rsxy?: number;
  mu_sxy?: number;
  psi?: number;
  Rbs_loc?: number;
  Ab_loc?: number;
  psi_Rbs_Ab?: number;
  psi_Rb_Ab?: number;
  cos_arm?: boolean;
}

export default function LocalCompressionResultLayout({
  error,
  Rb_loc,
  fi_sxy,
  Rsxy,
  mu_sxy,
  psi,
  Rbs_loc,
  Ab_loc,
  psi_Rbs_Ab,
  psi_Rb_Ab,
  cos_arm,
  ...other
}: LocalCompressionResultLayoutProps) {
  if (error) {
    return (
      <Alert color="error" {...other}>
        {error}
      </Alert>
    );
  }

  // С учетом косвенного армирования
  if (cos_arm) {
    return (
      <Alert color="success" {...other}>
        <Typography mt={1}>
          R<sub>b,loc</sub>= {Rb_loc} кг/см<sup>2</sup>; φ<sub>sxy</sub>= {fi_sxy}; R<sub>sxy</sub>{' '}
          = {Rsxy} кг/см<sup>2</sup>; μ<sub>s,xy</sub> = {mu_sxy}
        </Typography>
        <Typography mt={1}>
          ψ = {psi}; R<sub>bs,loc</sub> = {Rbs_loc} кг/см<sup>2</sup>; A<sub>b,loc</sub> = {Ab_loc}{' '}
          см<sup>2</sup>
        </Typography>
        <Typography mt={1}>
          ψR<sub>b,loc</sub>A<sub>b,loc</sub> = {psi_Rbs_Ab} кг
        </Typography>
        <Typography mt={1}>Требование выполняется. Прочность обеспечена.</Typography>
      </Alert>
    );
  }

  return (
    <Alert color="success" {...other}>
      <Typography mt={1}>
        R<sub>b,loc</sub>= {Rb_loc} кг/см<sup>2</sup>
      </Typography>
      <Typography mt={1}>
        ψR<sub>b,loc</sub>A<sub>b,loc</sub>= {psi_Rb_Ab} кг
      </Typography>
      <Typography mt={1}>Требование выполняется. Прочность обеспечена.</Typography>
    </Alert>
  );
}
