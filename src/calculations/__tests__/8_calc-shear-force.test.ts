import CalculateShearForce from '../8_calc-shear-force';
import { testData, control_acceptable_error } from '../test-data/8_calc-shear-force-test-data';

type MinMaxKeys = 'Qmax' | 'Q' | 'Qult' | 'M' | 'Mult';

const min_max_keys: MinMaxKeys[] = ['Qmax', 'Q', 'Qult', 'M', 'Mult'];

describe('CalculateShearForce', () => {
  testData.forEach((data, index) => {
    it(`test ${index + 1}`, () => {
      const result = CalculateShearForce(data.input);
      expect(result).toEqual(data.expected_output);
      if (data.expected_output.error) {
        return;
      }

      min_max_keys.forEach((key) => {
        const minKey =
          data.control_output[key]! - (data.control_output[key]! * control_acceptable_error) / 100;
        const maxKey =
          data.control_output[key]! + (data.control_output[key]! * control_acceptable_error) / 100;
        expect(result[key]).toBeLessThanOrEqual(maxKey);
        expect(result[key]).toBeGreaterThanOrEqual(minKey);
      });
    });
  });
});
