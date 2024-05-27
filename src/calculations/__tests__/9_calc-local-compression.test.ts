import calculateLocalCompression from '../9_calc-local-compression';
import {
  testData,
  control_acceptable_error
} from '../test-data/9_calc-local-compression-test-data';

type MinMaxKeys =
  | 'N'
  | 'Rb_loc'
  | 'fi_sxy'
  | 'Rsxy'
  | 'mu_sxy'
  | 'psi'
  | 'Rbs_loc'
  | 'Ab_loc'
  | 'psi_Rbs_Ab'
  | 'psi_Rb_Ab';

const min_max_keys_cos_arm_off: MinMaxKeys[] = ['N', 'Rb_loc', 'psi_Rb_Ab'];
const min_max_keys_cos_arm_on: MinMaxKeys[] = [
  'N',
  'Rb_loc',
  'fi_sxy',
  'Rsxy',
  'mu_sxy',
  'psi',
  'Rbs_loc',
  'Ab_loc',
  'psi_Rbs_Ab'
];

describe('CalculateLocalCompression', () => {
  testData.forEach((data, index) => {
    it(`test ${index + 1}`, () => {
      const result = calculateLocalCompression(data.input);
      expect(result).toEqual(data.expected_output);
      if (data.expected_output.error) {
        return;
      }

      const check_keys_array = result.cos_arm ? min_max_keys_cos_arm_on : min_max_keys_cos_arm_off;

      check_keys_array.forEach((key) => {
        const val = data.control_output[key]!;
        const minKey = val - (val * control_acceptable_error) / 100;
        const maxKey = val + (val * control_acceptable_error) / 100;
        expect(result[key]).toBeLessThanOrEqual(maxKey);
        expect(result[key]).toBeGreaterThanOrEqual(minKey);
      });
    });
  });
});
