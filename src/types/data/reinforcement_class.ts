export interface ReinforcementClass {
  class: string;
  document: string[];
  appearance: string[];
  diameters: Diameter[];
  application_area: ApplicationArea;
  resistance: Resistance;
  elasticity: Elasticity;
}

export interface Diameter {
  steel_grades: string[];
  min: number;
  max: number;
}

export interface ApplicationArea {
  non_stressed: string[];
  stressed: string[];
}

export interface Resistance {
  Rs: number;
  Rsc: number;
  Rsc_short: number;
  Rsw: number;
  Rs_ser: number;
}

export interface Elasticity {
  Es: number;
}
