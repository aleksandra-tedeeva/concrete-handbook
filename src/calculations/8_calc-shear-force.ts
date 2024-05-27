/* eslint-disable @typescript-eslint/no-unused-vars */
import { roundNumber } from './util';

const TEXT_UNEXECUTED = 'Требование не выполняется.';

const ERROR_QMAX_MORE_THAN_Q =
  '( Qmax > Q ) Прочность по полосе между наклонными трещинами не обеспечена.';
const ERROR_QMAX_MORE_THAN_QULT =
  '( Qmax > Qult ) Прочность наклонного сечения на действие поперечной силы не обеспечена.';
const ERROR_M_MORE_THAN_MULT =
  '( M > Mult ) Прочность наклонного сечения на действие момента не обеспечена.';
const ERROR_A_PLUS_A_C_MORE_THAN_H =
  'Высота сечения (h) должна превышать сумму защитного слоя бетона растянутой и сжатой зоны (a + a`).';

export interface CalculateShearForceParams {
  M: number;
  Qmax: number;
  N: number;
  q: number;

  h: number;
  b: number;
  a: number;
  a_c: number;

  As: number;
  As_c: number;
  Asw: number;
  sw: number;

  gamma: number;

  Rb: number;
  Rbt: number;
  Eb: number;

  Rs: number;
  Es: number;
  Rsw: number;
}

export interface CalculateShearForceResult {
  Q?: number;
  Qmax?: number;
  Qult?: number;
  M?: number;
  Mult?: number;
  error?: string;
}

export default function CalculateShearForce({
  M,
  Qmax,
  N,
  q,

  h,
  b,
  a,
  a_c,

  As,
  As_c,
  Asw,
  sw,

  gamma,

  Rb: Rb_raw,
  Rbt: Rbt_raw,
  Eb,

  Rs,
  Es,
  Rsw
}: CalculateShearForceParams): CalculateShearForceResult {
  const Rb = Rb_raw * gamma;
  const Rbt = Rbt_raw * gamma;

  /** Определение коэффициента 𝜙𝑛 */
  const alpha = Es / (Eb * 1000);
  const Ab = b * h - As - As_c;
  const sigma_cp = Math.abs(N) / (Ab + alpha * (As + As_c));

  const cpde = Ab + alpha * (As + As_c);

  const a_a_c = a + a_c;
  if (a_a_c >= h) {
    return {
      error: `${ERROR_A_PLUS_A_C_MORE_THAN_H} ${TEXT_UNEXECUTED}`
    };
  }

  //Поскольку 𝑁 = −3.00 · 103 кг < 0 элемент обжат
  //Проверка на знак у N
  let fi_n = 1;
  if (N < 0) {
    fi_n = 1 + sigma_cp / Rb;
  } else if (N > 0) {
    fi_n = 1 - sigma_cp / Rbt;
  }

  //фиксированные значения
  const fi_b1 = 0.3;
  const fi_b2 = 1.5;
  const fi_sw = 0.75;

  //рабочая высота сечения
  const h0 = h - a;

  //Проверка прочности по полосе между наклонными трещинами.
  const Q = fi_n * fi_b1 * Rb * b * h0;

  if (Q < Qmax) {
    return {
      error: `${ERROR_QMAX_MORE_THAN_Q} ${TEXT_UNEXECUTED}`
    };
  }

  const sw_Q = (Rbt * b * Math.pow(h0, 2)) / Qmax;
  const qsw = (Rsw * Asw) / sw;
  const qsw_0_25 = 0.25 * Rbt * b;

  //значения интервала [h0; 3*h0]
  const c_end = 3 * h0;
  let c_start = h0;
  //для Qb
  let x = h0;

  let Qb = (fi_n * fi_b2 * Rbt * b * Math.pow(h0, 2)) / h0;
  let Qb_2_5 = 2.5 * Rbt * b * h0;
  let Qb_0_5 = 0.5 * Rbt * b * h0;
  let Qsw = fi_sw * qsw * h0;
  let Qult = Qb + Qsw + q * h0;

  //переменные для минимальных значений Qult и C
  let Qult_min = Qult;
  let c_min = h0;
  //коэффициент для поиска
  const n = (c_end - h0) / 8;

  //алгоритм для поиска минимальных значений Qult и C
  for (let i = 0; i <= 8; i++) {
    Qb = (fi_n * fi_b2 * Rbt * b * Math.pow(h0, 2)) / c_start;

    Qsw = fi_sw * qsw * x;

    Qult = Qb + Qsw + q * c_start;

    x = x + n;
    c_start = c_start + n;

    if (c_start >= 2 * h0) {
      x = 2 * h0;
    }

    if (Qult_min > Qult) {
      Qult_min = Qult;
      c_min = c_start - n;
    }
  }

  //расчет с учетом минимальных значений
  Qb = (fi_n * fi_b2 * Rbt * b * Math.pow(h0, 2)) / c_min;

  const c0 = c_min;
  if (c_min >= 2 * h0) {
    c_min = 2 * h0;
  }
  Qsw = fi_sw * qsw * c_min;
  Qult = Qb + Qsw + q * c0;

  //проверка Qb
  if (Qb >= Qb_2_5) {
    Qb = Qb_2_5;
  }
  if (Qb <= Qb_0_5) {
    Qb = Qb_0_5;
  }

  //Прочность наклонного сечения на действие поперечной силы.
  if (Qult < Qmax) {
    return {
      error: `${ERROR_QMAX_MORE_THAN_QULT} ${TEXT_UNEXECUTED}`
    };
  }

  //Проверка прочности наклонного сечения на действие момента при 𝐶 = h0.
  //Кода Mult минимальное

  //не совсем понимаю для чего они это проверяют
  let C = h0;
  if (C >= 2 * h0) {
    C = 2 * h0;
  }

  const zs = 0.9 * C;
  const Ns = Rs * As;
  const Ms = Ns * zs;
  const qsw_end = (Rsw * Asw) / sw;
  const Qsw_end = qsw_end * C;
  const Msw = 0.5 * Qsw_end * C;
  const Mult = Ms + Msw;

  //Прочность наклонного сечения на действие момента
  if (Mult < M) {
    return {
      error: `${ERROR_M_MORE_THAN_MULT} ${TEXT_UNEXECUTED}`
    };
  }

  return {
    Q: roundNumber(Q),
    Qmax: roundNumber(Qmax),
    Qult: roundNumber(Qult),
    M: roundNumber(M),
    Mult: roundNumber(Mult),
    error: ''
  };
}
