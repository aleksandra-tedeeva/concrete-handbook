import { Duration, Shape } from './types';
import { roundNumber } from './util';

export interface CalculateConcreteBendRebarAssortmentParams {
  M: number;
  // ~~~
  duration?: Duration;
  shape?: Shape;
  // ~~~
  b: number;
  h: number;
  a: number;
  a_c: number;
  // ~~~
  Rs: number;
  Rsc: number;
  Es: number;
  Rb: number;
  gamma: number;
}

export interface CalculateConcreteBendRebarAssortmentResult {
  As?: number;
  As_c?: number;
  error?: string;
}

export const calculateConcreteBendRebarAssortment = ({
  M,
  // ~~~
  b,
  h,
  a,
  a_c,
  // ~~~
  Rs,
  Rsc,
  Es,
  Rb: Rb_raw,
  gamma
}: CalculateConcreteBendRebarAssortmentParams): CalculateConcreteBendRebarAssortmentResult => {
  const Rb = Rb_raw * gamma;
  const h0 = h - a;

  const epsilon_s_el = Rs / Es;
  const epsilon_b2 = 0.0035;

  const xi_R = 0.8 / (1 + epsilon_s_el / epsilon_b2);

  const alpha_R = xi_R * (1 - 0.5 * xi_R);

  const alpha_m = M / (Rb * b * Math.pow(h0, 2));

  if (alpha_m <= alpha_R) {
    // арматура в сжатой зоне не требуется
    const As = (Rb * b * h0 * (1 - Math.sqrt(1 - 2 * alpha_m))) / Rs;

    return {
      As: roundNumber(As),
      error: ''
    };
  } else {
    // требуется арматура в сжатой зоне
    const As_c = (M - alpha_R * Rb * b * Math.pow(h0, 2)) / (Rsc * (h0 - a_c));
    const As = (xi_R * Rb * b * h0) / Rs + As_c;

    return {
      As: roundNumber(As),
      As_c: roundNumber(As_c),
      error: ''
    };
  }
};
