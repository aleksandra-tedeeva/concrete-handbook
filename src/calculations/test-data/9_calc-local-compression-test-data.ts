import {
  CalculateLocalCompressionParams,
  CalculateLocalCompressionResult
} from '../9_calc-local-compression';
import { MPaToKgCm2 } from '../util';

export const control_acceptable_error = 1;

export interface CalculateLocalCompressionTestData {
  input: CalculateLocalCompressionParams;
  expected_output: CalculateLocalCompressionResult;
  control_output: CalculateLocalCompressionResult;
}

export const testData: CalculateLocalCompressionTestData[] = [
  // test 1
  {
    input: {
      type_diagram: 'A',
      N: 80000,
      type_load: 'uneven',
      a1: 20,
      a2: 22,
      c: 5,
      gamma: 0.9,
      // B20
      Rb_raw: MPaToKgCm2(11.5),
      cos_arm: false
    },
    expected_output: {
      error: '',
      N: 80000,
      Rb_loc: 253.55,
      psi_Rb_Ab: 83672.88,
      cos_arm: false
    },
    control_output: {
      N: 80000,
      Rb_loc: 253.5,
      psi_Rb_Ab: 83600,
      cos_arm: false
    }
  },
  // test 2
  {
    input: {
      type_diagram: 'A',
      N: 80000,
      type_load: 'uneven',
      a1: 20,
      a2: 22,
      c: 5,
      gamma: 0.9,
      // B20
      Rb_raw: MPaToKgCm2(11.5),

      cos_arm: true,
      // A240
      Rsxy: MPaToKgCm2(210),
      lx: 30,
      Asx: 0.5,
      nx: 7,
      ly: 30,
      Asy: 0.5,
      ny: 7,
      s: 5
    },
    expected_output: {
      error: '',
      N: 80000,
      Rb_loc: 253.55,
      fi_sxy: 1.43,
      Rsxy: 2141.41,
      mu_sxy: 0.05,
      psi: 0.75,
      Rbs_loc: 507.11,
      Ab_loc: 440,
      psi_Rbs_Ab: 167345.76,
      cos_arm: true
    },
    control_output: {
      error: '',
      N: 80000,
      Rb_loc: 253.5,
      fi_sxy: 1.43,
      Rsxy: 2141,
      mu_sxy: 0.05,
      psi: 0.75,
      Rbs_loc: 510,
      Ab_loc: 440,
      psi_Rbs_Ab: 167300,
      cos_arm: true
    }
  },
  // test 3
  {
    input: {
      type_diagram: 'B',
      N: 80000,
      type_load: 'even',
      a1: 20,
      a2: 22,
      c: 5,
      gamma: 0.9,
      // B20
      Rb_raw: MPaToKgCm2(11.5),

      cos_arm: true,
      // A240
      Rsxy: MPaToKgCm2(210),
      lx: 30,
      Asx: 0.5,
      nx: 7,
      ly: 30,
      Asy: 0.5,
      ny: 7,
      s: 5
    },
    expected_output: {
      error: '',
      N: 80000,
      Rb_loc: 151.04,
      fi_sxy: 1.43,
      Rsxy: 2141.41,
      mu_sxy: 0.05,
      psi: 1,
      Rbs_loc: 302.08,
      Ab_loc: 440,
      psi_Rbs_Ab: 132913.45,
      cos_arm: true
    },
    control_output: {
      error: '',
      N: 80000,
      Rb_loc: 151,
      fi_sxy: 1.43,
      Rsxy: 2141,
      mu_sxy: 0.05,
      psi: 1,
      Rbs_loc: 302,
      Ab_loc: 440,
      psi_Rbs_Ab: 132900,
      cos_arm: true
    }
  },
  // test 4
  {
    input: {
      type_diagram: 'B',
      N: 80000,
      type_load: 'uneven',
      a1: 20,
      a2: 22,
      c: 5,
      gamma: 0.9,
      // B20
      Rb_raw: MPaToKgCm2(11.5),

      cos_arm: true,
      // A240
      Rsxy: MPaToKgCm2(210),
      lx: 30,
      Asx: 0.5,
      nx: 7,
      ly: 30,
      Asy: 0.5,
      ny: 7,
      s: 5
    },
    expected_output: {
      error: '',
      N: 80000,
      Rb_loc: 151.04,
      fi_sxy: 1.43,
      Rsxy: 2141.41,
      mu_sxy: 0.05,
      psi: 0.75,
      Rbs_loc: 302.08,
      Ab_loc: 440,
      psi_Rbs_Ab: 99685.09,
      cos_arm: true
    },
    control_output: {
      error: '',
      N: 80000,
      Rb_loc: 151,
      fi_sxy: 1.43,
      Rsxy: 2141,
      mu_sxy: 0.05,
      psi: 0.75,
      Rbs_loc: 302,
      Ab_loc: 440,
      psi_Rbs_Ab: 99700,
      cos_arm: true
    }
  },
  // test 5
  {
    input: {
      type_diagram: 'D',
      N: 800000,
      type_load: 'even',
      a1: 20,
      a2: 22,
      c: 5,
      gamma: 0.9,
      // B20
      Rb_raw: MPaToKgCm2(11.5),

      cos_arm: true,
      // A240
      Rsxy: MPaToKgCm2(210),
      lx: 30,
      Asx: 0.5,
      nx: 7,
      ly: 30,
      Asy: 0.5,
      ny: 7,
      s: 5
    },
    expected_output: {
      error: 'Требование не выполняется. Прочность не обеспечена.'
    },
    control_output: {}
  }
];
