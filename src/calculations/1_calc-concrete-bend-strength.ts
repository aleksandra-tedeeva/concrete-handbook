import { Duration, Shape } from './types';
import { roundNumber } from './util';

const TEXT_SUFFICIENT = 'Прочность бетона достаточна для выдерживания изгибающего момента';
const TEXT_INSUFFICIENT = 'Прочность бетона не достаточна для выдерживания изгибающего момента';

const ERROR_XI_MORE_THAN_XIR = 'xi > xiR';
const ERROR_RSCASC_MORE_THAN_RSAS = 'RscAs_c > RsAs';

export interface CalculateConcreteBendStrengthParams {
  // Входные с формы
  M: number;
  duration: Duration;
  shape: Shape;
  b: number;
  h: number;
  a: number;
  a_c: number;
  As: number;
  As_c: number;

  gamma: number;

  // С арматурины
  Rs: number;
  Rsc: number;
  Es: number;

  // С класса бетона
  Rb: number;
  Rbt: number;
}

export interface CalculateConcreteBendStrengthResult {
  error?: string;
  calc_result?: boolean;
  calc_result_text?: string;
  M?: number;
  Mult?: number;
}

export const calculateConcreteBendStrength = ({
  M,
  duration,
  shape,
  b,
  h,
  a,
  a_c,
  As,
  As_c,
  gamma,
  Rs,
  Rsc,
  Es,
  Rb: Rb_raw,
  Rbt
}: CalculateConcreteBendStrengthParams): CalculateConcreteBendStrengthResult => {
  /** Нагрузка */
  // Изгибающий момент действующий в сечении кН*м
  //const M = 137.29;
  // Продолжительность действия нагрузки
  //const duration: DurationType = 'short';

  /** Геометрические характеристики сечения */
  // Форма поперечного сечения
  //const shape: ShapeType = 'rectangle';
  // -- если прямоугольное сечение, то
  // Ширина сечения в мм
  //const b = 300;
  // Высота сечения в мм
  //const h = 400;
  // -- если тавр, то
  // Ширина полки тавра в мм
  //const bf = 900;
  // Высота полки тавра в мм
  //const hf = 100;
  // Расст. от грани бетона до ц.т. растянутой арматуры в мм
  //const a = 50;
  // Расстояние от грани бетона до ц.т. сжатой арматуры в мм
  //const ac = 50;
  // Площадь растянутой арматуры в мм2
  //const As = 120;
  // Площадь сжатой арматуры в мм2
  //const Asc = 30;

  /** Характеристики арматуры и бетона */
  // Класс бетона на сжатие
  //const concreteClass = 'B20';
  // Коэффициент условий работы бетона (γb1×γb3×γb4)
  //const gamma = 1;
  // Класс арматуры
  //const reinforcementClass = 'A500';

  // const reinforcement = reinforcements.find((el) => el.name === reinforcementClass);
  // if (!reinforcement) {
  //   return;
  // }
  // const { Rs, Rsc } = reinforcement;

  /** Расчет */
  // Сопротивление арматуры растяжению
  //const Rs = 4434;
  // Сопротивление арматуры сжатию
  //const Rsc = 4077;
  // Сопротивление бетона растяжению
  //const Rb = 117.2;
  // Модуль упругости арматуры
  //const Es = 2038736;

  const Rb = Rb_raw * gamma;

  // Площадь сечения бетона
  const h0 = h - a;

  const RsAs = Rs * As;
  const RscAs_c = Rsc * As_c;

  if (RscAs_c > RsAs) {
    return {
      error: ERROR_RSCASC_MORE_THAN_RSAS
    };
  }

  // Высота сжатой зоны бетона в мм
  const x = (RsAs - RscAs_c) / (Rb * b);

  // относительная высота сжатой зоны бетона
  const xi = x / h0;

  const zeta = 1 - 0.5 * xi;

  // относительная деформация растянутой арматуры при напряжениях, равных Rs
  const epsilon_s_el = Rs / Es;
  // относительная деформация сжатого бетона при напряжениях, равных Rb при непродолжительном действии нагрузки, константа
  const epsilon_b2 = 0.0035;

  const alpha_m = M / ((Rb * b * h0) ^ 2);

  //граничная относительная высота сжатой зоны бетона
  const xiR = 0.8 / (1 + epsilon_s_el / epsilon_b2);

  if (xi > xiR) {
    return {
      error: ERROR_XI_MORE_THAN_XIR
    };
  }

  // WC original
  const Mult = Rb * b * x * (h0 - 0.5 * x) + Rsc * As_c * (h0 - a_c);

  const Mult2 = (alpha_m * Rb * b * h0) ^ 2;
  const Mult3 = Rs * As * h0 * zeta;

  const W = ((b * h) ^ 2) / 2;

  const Mult4 = Rbt * W;

  console.log('Mults', Mult, Mult2, Mult3, Mult4);

  if (M <= Mult) {
    console.log('Прочность бетона достаточна для выдерживания изгибающего момента', M, Mult);
  } else {
    console.log('Прочность бетона не достаточна для выдерживания изгибающего момента', M, Mult);
  }

  const debug = {
    M,
    duration,
    shape,
    b,
    h,
    a,
    a_c,
    As,
    As_c,
    gamma,
    Rs,
    Rsc,
    Es,
    Rb,
    h0,
    RsAs,
    RscAs_c,
    x,
    xi,
    epsilon_s_el,
    epsilon_b2,
    xiR,
    Mult
  };

  console.log('calc debug', debug);

  const isSufficient = M <= Mult;

  return {
    calc_result: isSufficient,
    calc_result_text: isSufficient ? TEXT_SUFFICIENT : TEXT_INSUFFICIENT,
    M,
    Mult: roundNumber(Mult)
  };
};
