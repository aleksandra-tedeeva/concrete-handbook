import { calculateConcreteBendStrength } from '../1_calc-concrete-bend-strength';
import {
  testData,
  control_acceptable_error
} from '../test-data/1_calc-concrete-bend-strength-test-data';

describe('calculateConcreteBendStrength', () => {
  testData.forEach((data, index) => {
    it(`test ${index + 1}`, () => {
      const result = calculateConcreteBendStrength(data.input);
      expect(result).toEqual(data.expected_output);

      if (data.expected_output.error) {
        return;
      }

      const min =
        data.control_output.Mult! - (data.control_output.Mult! * control_acceptable_error) / 100;
      const max =
        data.control_output.Mult! + (data.control_output.Mult! * control_acceptable_error) / 100;
      expect(result.Mult).toBeLessThanOrEqual(max);
      expect(result.Mult).toBeGreaterThanOrEqual(min);
    });
  });
});
