import { calculateConcreteBendRebarAssortment } from '../2_calc-concrete-bend-rebar-assortment';
import {
  testData,
  control_acceptable_error
} from '../test-data/2_calc-concrete-bend-rebar-assortment-test-data';

describe('calculateConcreteBendRebarAssortment', () => {
  //   testData.forEach((data, index) => {
  //     it(`test ${index + 1}`, () => {
  //       const result = calculateConcreteBendRebarAssortment(data.input);
  //       expect(result).toEqual(data.expected_output);
  //       if (data.expected_output.error) {
  //         return;
  //       }
  //       const min =
  //         data.control_output.Mult! - (data.control_output.Mult! * control_acceptable_error) / 100;
  //       const max =
  //         data.control_output.Mult! + (data.control_output.Mult! * control_acceptable_error) / 100;
  //       expect(result.Mult).toBeLessThanOrEqual(max);
  //       expect(result.Mult).toBeGreaterThanOrEqual(min);
  //     });
  //   });
});
