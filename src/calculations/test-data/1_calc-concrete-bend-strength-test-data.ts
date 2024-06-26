import {
  CalculateConcreteBendStrengthParams,
  CalculateConcreteBendStrengthResult
} from '../1_calc-concrete-bend-strength';
import { MPaToKgCm2 } from '../util';

export interface CalculateConcreteBendStrengthTestData {
  input: CalculateConcreteBendStrengthParams;
  expected_output: CalculateConcreteBendStrengthResult;
  control_output: CalculateConcreteBendStrengthResult;
}

// допустимая погрешность в %
export const control_acceptable_error = 0.1;

export const testData: CalculateConcreteBendStrengthTestData[] = [
  // 1
  {
    input: {
      M: 1400000,
      duration: 'short',
      shape: 'rectangle',
      b: 30,
      h: 40,
      a: 5,
      a_c: 5,
      As: 12,
      As_c: 3,
      gamma: 1,
      // A500
      Rs: MPaToKgCm2(435),
      Rsc: MPaToKgCm2(400),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5)
    },
    expected_output: {
      Mult: 1563017.95,
      calc_result: true,
      calc_result_text:
        'Требование выполняется. Прочность бетона достаточна для выдерживания изгибающего момента.',
      M: 1400000
    },
    control_output: {
      Mult: 1562000,
      calc_result: true
    }
  },
  // 2
  {
    input: {
      M: 1400000,
      duration: 'short',
      shape: 'rectangle',
      b: 30,
      h: 40,
      a: 5,
      a_c: 5,
      As: 12,
      As_c: 3,
      gamma: 0.9,
      // A500
      Rs: MPaToKgCm2(435),
      Rsc: MPaToKgCm2(400),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5)
    },
    expected_output: {
      Mult: 1536481.58,
      calc_result: true,
      calc_result_text:
        'Требование выполняется. Прочность бетона достаточна для выдерживания изгибающего момента.',
      M: 1400000
    },
    control_output: {
      Mult: 1536000,
      calc_result: true
    }
  },
  // 3
  {
    input: {
      M: 500000,
      duration: 'short',
      shape: 'rectangle',
      b: 10,
      h: 20,
      a: 5,
      a_c: 5,
      As: 12,
      As_c: 3,
      gamma: 0.9,
      // A500
      Rs: MPaToKgCm2(435),
      Rsc: MPaToKgCm2(400),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5)
    },
    expected_output: {
      M: 500000,
      Mult: 210626.87,
      calc_result: false,
      calc_result_text:
        'Требование не выполняется. Прочность бетона не достаточна для выдерживания изгибающего момента.'
    },
    control_output: {
      Mult: 210600,
      calc_result: false
    }
  },
  // 4
  {
    input: {
      M: 1400000,
      duration: 'short',
      shape: 'rectangle',
      b: 30,
      h: 40,
      a: 5,
      a_c: 5,
      As: 12,
      As_c: 3,
      gamma: 1,
      // A500
      Rs: MPaToKgCm2(435),
      Rsc: MPaToKgCm2(400),
      Es: MPaToKgCm2(200000),
      // B10
      Rb: MPaToKgCm2(6)
    },
    expected_output: {
      M: 1400000,
      Mult: 1202802.18,
      calc_result: false,
      calc_result_text:
        'Требование не выполняется. Прочность бетона не достаточна для выдерживания изгибающего момента.'
    },
    control_output: {
      Mult: 1202000,
      calc_result: false
    }
  },
  // 5
  {
    input: {
      M: 1400000,
      duration: 'short',
      shape: 'rectangle',
      b: 30,
      h: 40,
      a: 5,
      a_c: 5,
      As: 12,
      As_c: 3,
      gamma: 1,
      // A240
      Rs: MPaToKgCm2(210),
      Rsc: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // B30
      Rb: MPaToKgCm2(17)
    },
    expected_output: {
      Mult: 831560.67,
      calc_result: false,
      M: 1400000,
      calc_result_text:
        'Требование не выполняется. Прочность бетона не достаточна для выдерживания изгибающего момента.'
    },
    control_output: {
      Mult: 831000,
      calc_result: false
    }
  },
  // 6 - case RsAs < RscA's, but x < 2a'
  {
    input: {
      M: 1400000,
      duration: 'short',
      shape: 'rectangle',
      b: 30,
      h: 40,
      a: 5,
      a_c: 5,
      As: 12,
      As_c: 20,
      gamma: 1,
      // A240
      Rs: MPaToKgCm2(210),
      Rsc: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5)
    },
    expected_output: {
      Mult: 805543.33,
      calc_result: false,
      M: 1400000,
      calc_result_text:
        'Требование не выполняется. Прочность бетона не достаточна для выдерживания изгибающего момента.'
    },
    control_output: {
      Mult: 805000,
      calc_result: false
    }
  },
  // 7 - case RsAs < RscA's, but x >= 2a'
  {
    input: {
      M: 1400000,
      duration: 'short',
      shape: 'rectangle',
      b: 30,
      h: 40,
      a: 5,
      a_c: 3,
      As: 12,
      As_c: 20,
      gamma: 1,
      // A240
      Rs: MPaToKgCm2(210),
      Rsc: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5)
    },
    expected_output: {
      Mult: 822302.21,
      calc_result: false,
      M: 1400000,
      calc_result_text:
        'Требование не выполняется. Прочность бетона не достаточна для выдерживания изгибающего момента.'
    },
    control_output: {
      Mult: 822000,
      calc_result: false
    }
  }
];
