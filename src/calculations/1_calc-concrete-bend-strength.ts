import { MPaToKgCm2 } from './util';

export type DurationType = 'short' | 'long';
export type ShapeType = 'rectangle' | 't-beam';
export type ReinforcementName = 'A240' | 'A400' | 'A500' | 'B500';

export interface Reinforcement {
  name: ReinforcementName;
  Rs: number;
  Rsc: number;
}

const reinforcements: Reinforcement[] = [
  {
    name: 'A240',
    Rs: 210,
    Rsc: 210
  },
  {
    name: 'A400',
    Rs: 350,
    Rsc: 350
  },
  {
    name: 'A500',
    Rs: 435,
    Rsc: 400
  },
  {
    name: 'B500',
    Rs: 435,
    Rsc: 380
  }
];

export const calculateConcreteBendStrength = () => {
  /** Нагрузка */
  // Изгибающий момент действующий в сечении
  const M = 1400000;
  // Продолжительность действия нагрузки
  const duration: DurationType = 'short';

  /** Геометрические характеристики сечения */
  // Форма поперечного сечения
  const shape: ShapeType = 'rectangle';
  // -- если прямоугольное сечение, то
  // Ширина сечения в см
  const b = 30;
  // Высота сечения в см
  const h = 40;
  // -- если тавр, то
  // Ширина полки тавра в см
  const bf = 90;
  // Высота полки тавра в см
  const hf = 10;
  // Расст. от грани бетона до ц.т. растянутой арматуры в см
  const a = 5;
  // Расстояние от грани бетона до ц.т. сжатой арматуры в см
  const ac = 5;
  // Площадь растянутой арматуры в см2
  const As = 12;
  // Площадь сжатой арматуры в см2
  const Asc = 3;

  /** Характеристики арматуры и бетона */
  // Класс бетона на сжатие
  const concreteClass = 'B20';
  // Коэффициент условий работы бетона (γb1×γb3×γb4)
  const gamma_bi = 1;
  // Класс арматуры
  const reinforcementClass = 'A500';

  const reinforcement = reinforcements.find((el) => el.name === reinforcementClass);
  if (!reinforcement) {
    return;
  }
  const { Rs: RsMpa, Rsc: RscMpa } = reinforcement;

  const Rs = MPaToKgCm2(RsMpa);
  const Rsc = MPaToKgCm2(RscMpa);
  console.log(Rs, Rsc);

  /** Расчет */
  // Площадь сечения бетона
  const h0 = h - a;
  // Сопротивление арматуры растяжению
  //const Rs = 4434;
  // Сопротивление арматуры сжатию
  //const Rsc = 4077;
  // Сопротивление бетона растяжению
  const Rb = 117.2;
  // Модуль упругости бетона
  const Es = 2038736;

  const RsAs = Rs * As;
  const RscAsc = Rsc * Asc;

  const x = (RsAs - RscAsc) / (Rb * b);

  const xi = x / h0;
  const e_sel = Rs / Es;
  const e_b2 = 0.0035;
  const xiR = 0.8 / (1 + e_sel / e_b2);
  const Mult = Rb * b * x * (h0 - 0.5 * x) + Rsc * Asc * (h0 - ac);

  if (M <= Mult) {
    console.log('Прочность бетона достаточна для выдерживания изгибающего момента');
  } else {
    console.log('Прочность бетона не достаточна для выдерживания изгибающего момента');
  }

  const debug = {
    RsAs,
    RscAsc,
    x,
    xi,
    e_sel,
    e_b2,
    xiR,
    Mult
  };

  console.log(debug);
};
