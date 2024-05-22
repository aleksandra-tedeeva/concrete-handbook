import {
  CalculateConcreteBendStrengthParams,
  CalculateConcreteBendStrengthResult
} from '../1_calc-concrete-bend-strength';

export interface CalculateConcreteBendStrengthTestData {
  input: CalculateConcreteBendStrengthParams;
  expected_output: CalculateConcreteBendStrengthResult;
  control_output: CalculateConcreteBendStrengthResult;
}

// допустимая погрешность в %
export const control_acceptable_error = 5;

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
      Rs: 435,
      Rsc: 400,
      Es: 200000,
      // B20
      Rb: 11.5,
      Rbt: 0.9
    },
    expected_output: {
      Mult: 1563017.95,
      calc_result: true
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
      Rs: 435,
      Rsc: 400,
      Es: 200000,
      // B20
      Rb: 11.5,
      Rbt: 0.9
    },
    expected_output: {
      Mult: 1536481.58,
      calc_result: true
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
      Rs: 435,
      Rsc: 400,
      Es: 200000,
      // B20
      Rb: 11.5,
      Rbt: 0.9
    },
    expected_output: {
      error: 'xi > xiR'
    },
    control_output: {
      Mult: 211000,
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
      Rs: 435,
      Rsc: 400,
      Es: 200000,
      // B10
      Rb: 6,
      Rbt: 0.56
    },
    expected_output: {
      error: 'xi > xiR'
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
      Rs: 210,
      Rsc: 210,
      Es: 200000,
      // B30
      Rb: 17,
      Rbt: 1.15
    },
    expected_output: {
      Mult: 81547.94,
      calc_result: false,
      M: 1400000,
      calc_result_text: 'Прочность бетона не достаточна для выдерживания изгибающего момента'
    },
    control_output: {
      Mult: 831000,
      calc_result: false
    }
  }
];
