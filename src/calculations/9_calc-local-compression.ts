import { LocalCompressionDiagram, LocalCompressionLoad } from './types';
import { roundNumber } from './util';

export interface CalculateLocalCompressionParams {
  type_diagram: LocalCompressionDiagram;
  N: number;
  type_load: LocalCompressionLoad;
  a1: number;
  a2: number;
  c: number;
  gamma: number;
  Rb_raw: number;

  cos_arm: boolean;
  Rsxy?: number;
  lx?: number;
  Asx?: number;
  nx?: number;
  ly?: number;
  Asy?: number;
  ny?: number;
  s?: number;
}

export interface CalculateLocalCompressionResult {
  error?: string;
  N?: number;
  Rb_loc?: number;
  fi_sxy?: number;
  Rsxy?: number;
  mu_sxy?: number;
  psi?: number;
  Rbs_loc?: number;
  Ab_loc?: number;
  psi_Rbs_Ab?: number;
  psi_Rb_Ab?: number;
  cos_arm?: boolean;
}

export default function calculateLocalCompression({
  type_diagram,
  N,
  type_load,
  a1,
  a2,
  c,
  gamma,
  Rb_raw,
  Rsxy,
  cos_arm,
  lx,
  Asx,
  nx,
  ly,
  Asy,
  ny,
  s
}: CalculateLocalCompressionParams): CalculateLocalCompressionResult {
  const Rb = Rb_raw * gamma;

  //расчет с учетом выбора схемы
  let Ab_loc = a1 * a2;
  let Ab_max;
  if (type_diagram === 'B' || type_diagram === 'E') {
    Ab_max = (2 * a2 + a1) * a2;
  } else if (type_diagram === 'C' || type_diagram === 'D') {
    Ab_max = Ab_loc;
  } else if (type_diagram === 'F') {
    Ab_max = (2 * a2 + a1) * (2 * c + a2);
  } else if (type_diagram === 'G') {
    Ab_max = a2 * (a1 + 2 * c);
  } else if (type_diagram === 'H') {
    Ab_max = (Math.PI * Math.pow(3 * a1, 2)) / 4;
    Ab_loc = (Math.PI * Math.pow(a1, 2)) / 4;
  } else Ab_max = (2 * a2 + a1) * (2 * a1 + a2);

  let fi_b = 0.8 * Math.sqrt(Ab_max / Ab_loc);
  //условие для fi_b
  if (1 > fi_b || fi_b > 2.5) {
    fi_b = 1;
  }

  const Rb_loc = fi_b * Rb;

  //ЕСЛИ ВЫКЛ КОСВЕННОЕ АРМИРОВАНИЕ
  if (!cos_arm) {
    let psi = 1;
    if (type_load !== 'even') {
      psi = 0.75;
    }
    const psi_Rb_Ab = psi * Rb_loc * Ab_loc;
    if (N <= psi_Rb_Ab) {
      return {
        error: '',
        N: roundNumber(N),
        Rb_loc: roundNumber(Rb_loc),
        psi_Rb_Ab: roundNumber(psi_Rb_Ab),
        cos_arm
      };
    }
  }

  //ЕСЛИ ВКЛ КОСВЕННОЕ АРМИРОВАНИЕ
  const Ab_loc_ef = lx! * ly!;
  const mu_sxy = (nx! * Asx! * lx! + ny! * Asy! * ly!) / (s! * Ab_loc_ef);

  let fi_sxy;
  if (Ab_loc_ef > Ab_max) {
    fi_sxy = Math.sqrt(Ab_max / Ab_loc);
  } else fi_sxy = Math.sqrt(Ab_loc_ef / Ab_loc);

  let Rbs_loc = Rb_loc + 2 * fi_sxy * Rsxy! * mu_sxy;
  if (Rbs_loc > 2 * Rb_loc) {
    Rbs_loc = 2 * Rb_loc;
  }

  let psi = 1;
  if (type_load !== 'even') {
    psi = 0.75;
  }

  const psi_Rbs_Ab = psi * Rbs_loc * Ab_loc;
  if (N <= psi_Rbs_Ab) {
    return {
      error: '',
      N: roundNumber(N),
      Rb_loc: roundNumber(Rb_loc),
      fi_sxy: roundNumber(fi_sxy),
      Rsxy: roundNumber(Rsxy!),
      mu_sxy: roundNumber(mu_sxy),
      psi: roundNumber(psi),
      Rbs_loc: roundNumber(Rbs_loc),
      Ab_loc: roundNumber(Ab_loc),
      psi_Rbs_Ab: roundNumber(psi_Rbs_Ab),
      cos_arm
    };
  }

  return {
    error: 'Требование не выполняется. Прочность не обеспечена.'
  };
}
