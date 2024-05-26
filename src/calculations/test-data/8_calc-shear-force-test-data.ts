import { CalculateShearForceParams, CalculateShearForceResult } from '../8_calc-shear-force';
import { MPaToKgCm2 } from '../util';

export const control_acceptable_error = 0.1;

export interface CalculateShearForceTestData {
  input: CalculateShearForceParams;
  expected_output: CalculateShearForceResult;
  control_output: CalculateShearForceResult;
}

export const testData: CalculateShearForceTestData[] = [
  // test 1
  {
    input: {
      M: 550000,
      Qmax: 20000,
      N: -3000,
      q: 10,

      h: 60,
      b: 30,
      a: 4,
      a_c: 4,

      As: 10,
      As_c: 3,
      Asw: 2.1,
      sw: 20,

      gamma: 1,

      // B20
      Rb: MPaToKgCm2(11.5),
      Rbt: MPaToKgCm2(0.9),
      Eb: MPaToKgCm2(27.5),

      // = A400
      Rs: MPaToKgCm2(350),
      Es: MPaToKgCm2(200000),
      // || A240
      Rsw: MPaToKgCm2(170)
    },
    expected_output: {
      Qmax: 20000,
      Q: 59906.57,
      Qult: 24783.58,
      M: 550000,
      Mult: 2084193.47,
      error: ''
    },
    control_output: {
      Qmax: 20000,
      Q: 59910,
      Qult: 24780,
      M: 550000,
      Mult: 2084000
    }
  },
  // test 2
  {
    input: {
      M: 300000,
      Qmax: 10000,
      N: -5000,
      q: 10,

      h: 80,
      b: 20,
      a: 4,
      a_c: 4,

      As: 10,
      As_c: 3,
      Asw: 2.1,
      sw: 20,

      gamma: 0.9,

      // B10
      Rb: MPaToKgCm2(6),
      Rbt: MPaToKgCm2(0.56),
      Eb: MPaToKgCm2(19),

      // = A400
      Rs: MPaToKgCm2(350),
      Es: MPaToKgCm2(200000),
      // || A240
      Rsw: MPaToKgCm2(170)
    },
    expected_output: {
      Qmax: 10000,
      Q: 26432.21,
      Qult: 23470.17,
      M: 300000,
      Mult: 2966883.5,
      error: ''
    },
    control_output: {
      Qmax: 10000,
      Q: 26430,
      Qult: 23470,
      M: 300000,
      Mult: 2967000
    }
  },
  // test 3
  {
    input: {
      M: 800000,
      Qmax: 20000,
      N: 1000,
      q: 10,

      h: 60,
      b: 20,
      a: 4,
      a_c: 4,

      As: 10,
      As_c: 3,
      Asw: 2.1,
      sw: 20,

      gamma: 1,

      // B20
      Rb: MPaToKgCm2(11.5),
      Rbt: MPaToKgCm2(0.9),
      Eb: MPaToKgCm2(27.5),

      // = А400
      Rs: MPaToKgCm2(350),
      Es: MPaToKgCm2(200000),
      // || A240
      Rsw: MPaToKgCm2(170)
    },
    expected_output: {
      Qmax: 20000,
      Q: 36051.86,
      Qult: 21541.85,
      M: 800000,
      Mult: 2084193.47,
      error: ''
    },
    control_output: {
      Qmax: 20000,
      Q: 36050,
      Qult: 21540,
      M: 800000,
      Mult: 2084000
    }
  },
  // test 4
  {
    input: {
      M: 800000,
      Qmax: 20000,
      N: -3000,
      q: 10,

      h: 60,
      b: 20,
      a: 4,
      a_c: 4,

      As: 10,
      As_c: 3,
      Asw: 2.1,
      sw: 20,

      gamma: 1,

      // B20
      Rb: MPaToKgCm2(11.5),
      Rbt: MPaToKgCm2(0.9),
      Eb: MPaToKgCm2(27.5),

      // = А400
      Rs: MPaToKgCm2(350),
      Es: MPaToKgCm2(200000),
      // || A240
      Rsw: MPaToKgCm2(170)
    },
    expected_output: {
      Qmax: 20000,
      Q: 40188.53,
      Qult: 22211.66,
      M: 800000,
      Mult: 2084193.47,
      error: ''
    },
    control_output: {
      Qmax: 20000,
      Q: 40190,
      Qult: 22210,
      M: 800000,
      Mult: 2084000
    }
  },
  {
    input: {
      M: 800000,
      Qmax: 20000,
      N: -3000,
      q: 10,

      h: 60,
      b: 20,
      a: 4,
      a_c: 4,

      As: 10,
      As_c: 3,
      Asw: 2.1,
      sw: 20,

      gamma: 1,

      // B10
      Rb: MPaToKgCm2(6),
      Rbt: MPaToKgCm2(0.56),
      Eb: MPaToKgCm2(19),

      // = А240
      Rs: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // || A240
      Rsw: MPaToKgCm2(170)
    },
    expected_output: {
      error:
        '( Qmax > Qult ) Прочность наклонного сечения на действие поперечной силы не обеспечена. Требование не выполняется.'
    },
    control_output: {}
  }
];
