import { Typography } from '@mui/material';
import { calculateConcreteBendStrength } from '../calculations/1_calc-concrete-bend-strength';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { xiR } from './formulas';

export default function AlexCalcDebug() {
  calculateConcreteBendStrength();

  return (
    <>
      <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={2}>
        ξ<sub>R</sub> = <InlineMath>{String.raw`\frac{x_R}{h_0}`}</InlineMath>
      </Typography>

      <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={2}>
        <BlockMath>{xiR}</BlockMath>
      </Typography>
    </>
  );
}
