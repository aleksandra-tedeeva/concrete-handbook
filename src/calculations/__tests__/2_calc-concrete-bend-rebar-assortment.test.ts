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

      const As = data.control_output.As!;
      const deltaAs = (As * control_acceptable_error) / 100;
      const minAs = As - deltaAs;
      const maxAs = As + deltaAs;

      expect(result.As).toBeLessThanOrEqual(maxAs);
      expect(result.As).toBeGreaterThanOrEqual(minAs);

      if (result.As_c) {
        const As_c = data.control_output.As_c!;
        const deltaAs_c = (As_c * control_acceptable_error) / 100;
        const minAs_c = As_c - deltaAs_c;
        const maxAs_c = As_c + deltaAs_c;

        expect(result.As_c).toBeLessThanOrEqual(maxAs_c);
        expect(result.As_c).toBeGreaterThanOrEqual(minAs_c);
      }
    });
  });
});
