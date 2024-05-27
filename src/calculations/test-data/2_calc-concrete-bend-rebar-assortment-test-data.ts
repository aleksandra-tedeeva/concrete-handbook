import {
  CalculateConcreteBendRebarAssortmentParams,
  CalculateConcreteBendRebarAssortmentResult
} from '../2_calc-concrete-bend-rebar-assortment';
import { MPaToKgCm2 } from '../util';

export const control_acceptable_error = 0.5;

export interface CalculateConcreteBendRebarAssortmentTestData {
  input: CalculateConcreteBendRebarAssortmentParams;
  expected_output: CalculateConcreteBendRebarAssortmentResult;
  control_output: CalculateConcreteBendRebarAssortmentResult;
}

export const testData: CalculateConcreteBendRebarAssortmentTestData[] = [
  // test 1
  {
    input: {
      M: 1400000,
      b: 30,
      h: 40,
      a: 5,
      a_c: 5,
      // А500
      Rs: MPaToKgCm2(435),
      Rsc: MPaToKgCm2(400),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5),
      gamma: 1,
      duration: 'short',
      shape: 'rectangle'
    },
    expected_output: {
      As: 11.33,
      error: ''
    },
    control_output: {
      As: 11.33
    }
  },
  // test 2
  {
    input: {
      M: 800000,
      b: 10,
      h: 40,
      a: 5,
      a_c: 5,
      // А500
      Rs: MPaToKgCm2(435),
      Rsc: MPaToKgCm2(400),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5),
      gamma: 1,
      duration: 'short',
      shape: 'rectangle'
    },
    expected_output: {
      As: 6.74,
      As_c: 2.17,
      error: ''
    },
    control_output: {
      As: 6.74,
      As_c: 2.18
    }
  },
  // test 3
  {
    input: {
      M: 800000,
      b: 10,
      h: 40,
      a: 5,
      a_c: 5,
      // А400
      Rs: MPaToKgCm2(350),
      Rsc: MPaToKgCm2(350),
      Es: MPaToKgCm2(200000),
      // B40
      Rb: MPaToKgCm2(22),
      gamma: 1,
      duration: 'short',
      shape: 'rectangle'
    },
    expected_output: {
      As: 7.78,
      error: ''
    },
    control_output: {
      As: 7.78
    }
  },
  // test 4
  {
    input: {
      M: 1400000,
      b: 10,
      h: 40,
      a: 5,
      a_c: 5,
      // А240
      Rs: MPaToKgCm2(210),
      Rsc: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5),
      gamma: 1,
      duration: 'short',
      shape: 'rectangle'
    },
    expected_output: {
      As: 24.06,
      As_c: 12.27,
      error: ''
    },
    control_output: {
      As: 24.07,
      As_c: 12.27
    }
  },
  // test 5
  {
    input: {
      M: 1400000,
      b: 20,
      h: 20,
      a: 5,
      a_c: 5,
      // А240
      Rs: MPaToKgCm2(210),
      Rsc: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5),
      gamma: 1,
      duration: 'short',
      shape: 'rectangle'
    },
    expected_output: {
      As: 64.99,
      As_c: 54.88,
      error: ''
    },
    control_output: {
      As: 65.01,
      As_c: 54.9
    }
  },
  // test 6
  {
    input: {
      M: 1400000,
      b: 20,
      h: 20,
      a: 5,
      a_c: 5,
      // А240
      Rs: MPaToKgCm2(210),
      Rsc: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5),
      gamma: 0.9
    },
    expected_output: {
      As: 65.03,
      As_c: 55.93,
      error: ''
    },
    control_output: {
      As: 65.05,
      As_c: 55.95
    }
  },
  // test 7
  {
    input: {
      M: 10000,
      b: 12,
      h: 20,
      a: 5,
      a_c: 5,
      // А240
      Rs: MPaToKgCm2(210),
      Rsc: MPaToKgCm2(210),
      Es: MPaToKgCm2(200000),
      // B20
      Rb: MPaToKgCm2(11.5),
      gamma: 1,
      duration: 'short',
      shape: 'rectangle'
    },
    expected_output: {
      As: 0.32,
      error: ''
    },
    control_output: {
      As: 0.32
    }
  }
];
