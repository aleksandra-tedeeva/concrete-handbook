import { calculateConcreteBendStrength } from '../1_calc-concrete-bend-strength';
import { testData, control_acceptable_error } from './1_calc-concrete-bend-strength-test-data';

describe('calculateConcreteBendStrength', () => {
  testData.forEach((data, index) => {
    it(`test ${index}`, () => {
      const result = calculateConcreteBendStrength(data.input);
      expect(result).toEqual(data.expected_output);

      const min =
        data.control_output.Mult! - (data.control_output.Mult! * control_acceptable_error) / 100;
      const max =
        data.control_output.Mult! + (data.control_output.Mult! * control_acceptable_error) / 100;
      expect(result.Mult).toBeLessThanOrEqual(max);
      expect(result.Mult).toBeMoreThanOrEqual(min);
    });
  });
});
