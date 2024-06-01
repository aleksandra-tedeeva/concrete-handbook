import { Duration, Shape } from './types';
import { roundNumber } from './util';

const TEXT_SUFFICIENT =
  'Требование выполняется. Прочность бетона достаточна для выдерживания изгибающего момента.';
const TEXT_INSUFFICIENT =
  'Требование не выполняется. Прочность бетона не достаточна для выдерживания изгибающего момента.';

export interface CalculateConcreteBendStrengthParams {
  // Входные с формы
  M: number;
  duration: Duration;
  shape: Shape;
  b: number;
  bf?: number;
  h: number;
  hf?: number;
  a: number;
  a_c: number;
  As: number;
  As_c: number;
  gamma: number;

  // С арматуры
  Rs: number;
  Rsc: number;
  Es: number;

  // С класса бетона
  Rb: number;
}

export interface CalculateConcreteBendStrengthResult {
  error?: string;
  calc_result?: boolean;
  calc_result_text?: string;
  M?: number;
  Mult?: number;
}

export const calculateConcreteBendStrength = ({
  // Изгибающий момент действующий в сечении кН*м
  M,
  // Кратковременная или длительная нагрузка в см
  duration,
  // Форма поперечного сечения (прямоугольное или тавр) в см
  shape,
  // Ширина сечения в см
  b,
  // Ширина полки тавра в см
  bf,
  // Высота сечения в см
  h,
  // Высота полки тавра в см
  hf,
  // Расст. от грани бетона до ц.т. растянутой арматуры в см
  a,
  // Расстояние от грани бетона до ц.т. сжатой арматуры в см
  a_c,
  // Площадь растянутой арматуры в см2
  As,
  // Площадь сжатой арматуры в см2
  As_c,
  // Коэффициент условий работы бетона (γb1×γb3×γb4)
  gamma,
  // Сопротивление арматуры растяжению в кг/см2
  Rs,
  // Сопротивление арматуры сжатию в кг/см2
  Rsc,
  // Модуль упругости арматуры в кг/см2
  Es,
  // Сопротивление бетона растяжению в кг/см2
  Rb: Rb_raw
}: CalculateConcreteBendStrengthParams): CalculateConcreteBendStrengthResult => {
  // Сопротивление бетона растяжению, учитывая коэффициент условий работы бетона
  const Rb = Rb_raw * gamma;

  // Площадь сечения бетона
  const h0 = h - a;

  const RsAs = Rs * As;
  const RscAs_c = Rsc * As_c;

  if (RsAs < RscAs_c) {
    const x = RsAs / (Rb * b);
    let Mult = 0;

    if (x < 2 * a_c) {
      Mult = RsAs * (h0 - 0.5 * x);
    } else {
      Mult = RsAs * (h0 - a_c);
    }

    return {
      calc_result: M <= Mult,
      calc_result_text: M <= Mult ? TEXT_SUFFICIENT : TEXT_INSUFFICIENT,
      M: roundNumber(M),
      Mult: roundNumber(Mult)
    };
  }

  // высота сжатой зоны бетона в мм
  let x = (RsAs - RscAs_c) / (Rb * b);
  // относительная высота сжатой зоны бетона
  const xi = x / h0;

  // относительная деформация растянутой арматуры при напряжениях, равных Rs
  const epsilon_s_el = Rs / Es;
  // относительная деформация сжатого бетона при напряжениях,
  // равных Rb при непродолжительном действии нагрузки, константа
  const epsilon_b2 = 0.0035;

  //граничная относительная высота сжатой зоны бетона
  const xiR = 0.8 / (1 + epsilon_s_el / epsilon_b2);

  if (xi > xiR) {
    x = xiR * h0;
  }

  // Момент сопротивления сечения бетона
  const Mult = Rb * b * x * (h0 - 0.5 * x) + Rsc * As_c * (h0 - a_c);

  // Проверка на прочность (true/false)
  const isSufficient = M <= Mult;

  return {
    calc_result: isSufficient,
    calc_result_text: isSufficient ? TEXT_SUFFICIENT : TEXT_INSUFFICIENT,
    M: roundNumber(M),
    Mult: roundNumber(Mult)
  };
};
