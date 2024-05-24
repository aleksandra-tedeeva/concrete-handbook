/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography } from '@mui/material';
import { roundNumber } from './util';

const TEXT_UNEXECUTED = 'Требование не выполняется.';

const ERROR_QMAX_MORE_THAN_Q = '( Qmax > Q ) Прочность по полосе между наклонными трещинами не обеспечена.';
const ERROR_QMAX_MORE_THAN_QULT = '( Qmax > Qult ) Прочность наклонного сечения на действие поперечной силы не обеспечена.';
const ERROR_M_MORE_THAN_MULT = '( M > Mult ) Прочность наклонного сечения на действие момента не обеспечена.';
const ERROR_A_PLUS_A_C_MORE_THAN_H = 'Высота сечения (h) должна превышать сумму защитного слоя бетона растянутой и сжатой зоны (a + a`).';

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
  /** Внешние усилия */
  //Изгибающий момент действующий в сечении:
  // const M = 5.5 * Math.pow(10, 5);
  // //Максимальная поперечная сила в начале наклонной трещины:
  // const Qmax = 20000;
  // //Продольное усилие (обжатие со знаком минус):
  // const N = -3000;
  // //Равномерная нагрузка на верхней грани балки:
  // const q = 10;

  // /** Геометрические характеристики сечения и элемента */
  // //Высота сечения:
  // const h = 60;
  // //Ширина сечения:
  // const b = 30;
  // //Защитный слой бетона растянутой зоны:
  // const a = 4;
  // //Защитный слой бетона сжатой зоны:
  // const a_c = 4;
  // //Площадь растянутой арматуры:
  // const As = 10;
  // //Площадь сжатой арматуры:
  // const As_c = 3;
  // //Площадь поперечной арматуры:
  // const Asw = 2.1;
  // //Шаг поперечной армаруры:
  // const sw = 20;

  // /** Характеристики арматуры и бетона */
  // //Коэффициент условий работы бетона (γb1×γb3×γb5):
  // const gamma = 1;
  // //Класс бетона на сжатие: B20
  // const Rb = 117.3 * gamma;
  // const Rbt = 9.2 * gamma;
  // const Eb = 2.8 * Math.pow(10, 5);
  // //Класс продольной арматуры: A400
  // const Rs = 3569;
  // const Es = 2.04 * Math.pow(10, 6);
  // //Класс поперечной арматуры: A240
  // const Rsw = 1734;

  const Rb = Rb_raw * gamma;
  const Rbt = Rbt_raw * gamma;

  /** Определение коэффициента 𝜙𝑛 */
  const alpha = Es / (Eb* 1000);
  const Ab = b * h - As - As_c;
  const sigma_cp = (Math.abs(N)) / (Ab + alpha * (As + As_c));

  const cpde = Ab + (alpha * (As + As_c));
  console.log({ Es, Eb, alpha, Ab, sigma_cp, cpde, As, As_c, N });

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

  // const C0 = 2 * h0;

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

  console.log({ sw, sw_Q, qsw, qsw_0_25, Qsw, Qb});

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
    //самопроверка
    console.log({ c_start, Qb, Qsw, Qult });

    x = x + n;
    c_start = c_start + n;

    if (c_start >= 2 * h0) {
      x = 2 * h0;
    }

    if (Qult_min > Qult) {
      Qult_min = Qult;
      c_min = c_start - n;
    }
    console.log({ c_min });
  }

  //расчет с учетом минимальных значений
  Qb = (fi_n * fi_b2 * Rbt * b * Math.pow(h0, 2)) / c_min;

  const c0 = c_min;
  if (c_min >= 2 * h0) {
    c_min = 2 * h0;
  }
  Qsw = fi_sw * qsw * c_min;
  Qult = Qb + Qsw + q * c0;

  console.log({ Qult, sw, sw_Q, qsw, qsw_0_25, Qsw, Qb, c_min});
  //только для корректоного отображения в верстке
  // let c = 0;
  // if (c_min >= 2 * h0) {
  //   c = 2 * h0;
  // }
  // Qsw = fi_sw * qsw * c;

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

  // return (
  //   <>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Es = {Es}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Eb = {Eb}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       alpha = {alpha}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Ab = {Ab}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       σcp = {sigma_cp}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       fi_n = {fi_n}
  //     </Typography>
  //     <Typography sx={{ color: 'red', fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Q = {Qmax} {'< ='} {Q} Требование выполняется. Прочность по полосе между наклонными
  //       трещинами обеспечена.
  //     </Typography>

  //     {/* <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       c_min = {c_min}
  //     </Typography> */}
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Qb = {Qb} {'<='} {Qb_2_5}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Qb = {Qb} {'>='} {Qb_0_5}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       sw = {sw} {'<='} {sw_Q}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       qsw = {qsw} {'>='} {qsw_0_25}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Qsw = {Qsw}
  //     </Typography>
  //     <Typography sx={{ color: 'red', fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Qult = {Qmax} {'<='} {Qult} Требование выполняется. Прочность наклонного сечения на действие
  //       поперечной силы обеспечена.
  //     </Typography>

  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       zs = {zs}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Ns = {Ns}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Ms = {Ms}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       qsw_end = {qsw_end}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Qsw = {Qsw_end}
  //     </Typography>
  //     <Typography sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Msw = {Msw}
  //     </Typography>
  //     <Typography sx={{ color: 'red', fontStyle: 'italic', fontFamily: 'Times New Roman' }} mt={1}>
  //       Mult = {M} {'<='} {Mult} Требование выполняется. Прочность наклонного сечения на действие
  //       момента обеспечена.
  //     </Typography>
  //   </>
  // );
}
