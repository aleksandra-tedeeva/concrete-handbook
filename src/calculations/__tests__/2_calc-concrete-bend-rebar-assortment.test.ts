/* eslint-disable jest/no-conditional-expect */
import { calculateConcreteBendRebarAssortment } from '../2_calc-concrete-bend-rebar-assortment';
import {
  testData,
  control_acceptable_error
} from '../test-data/2_calc-concrete-bend-rebar-assortment-test-data';

describe('calculateConcreteBendRebarAssortment', () => {
  testData.forEach((data, index) => {
    it(`test ${index + 1}`, () => {
      const result = calculateConcreteBendRebarAssortment(data.input);
      expect(result).toEqual(data.expected_output);
      if (data.expected_output.error) {
        return;
      }
      const minAs =
        data.control_output.As! - (data.control_output.As! * control_acceptable_error) / 100;
      const maxAs =
        data.control_output.As! + (data.control_output.As! * control_acceptable_error) / 100;
      expect(result.As).toBeLessThanOrEqual(maxAs);
      expect(result.As).toBeGreaterThanOrEqual(minAs);

      if (result.As_c) {
        const minAs_c =
          data.control_output.As_c! - (data.control_output.As_c! * control_acceptable_error) / 100;
        const maxAs_c =
          data.control_output.As_c! + (data.control_output.As_c! * control_acceptable_error) / 100;
        expect(result.As_c).toBeLessThanOrEqual(maxAs_c);
        expect(result.As_c).toBeGreaterThanOrEqual(minAs_c);
      }
    });
  });
});
