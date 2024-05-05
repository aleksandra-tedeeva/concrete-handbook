import { Button, Typography } from '@mui/material';
import { calculateConcreteBendStrength } from '../calculations/1_calc-concrete-bend-strength';

export default function AlexCalcDebug() {
  calculateConcreteBendStrength();

  return (
    <Typography sx={{ mt: 2 }} color="text.secondary">
      КГ * СМ
    </Typography>
  );
}
