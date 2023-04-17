export interface ConcreteClass {
  name: string;
  second_group: Group;
  first_group: Group;
  resilience: Resilience;
  corresponding_mark: string;
}

export interface Group {
  compression: Sion;
  expansion: Sion;
}

export interface Sion {
  heavy: string;
  light: string;
  cellular: string;
}

export interface Resilience {
  heavy: string;
  light_grain: LightGrain;
  light_aerated_by_density: LightAeratedByDensity;
  cellular_autoclave_by_density: CellularAutoclaveByDensity;
}

export interface CellularAutoclaveByDensity {
  d_500: string;
  d_600: string;
  d_700: string;
  d_800: string;
  d_900: string;
  d_1000: string;
  d_1100: string;
  d_1200: string;
}

export interface LightAeratedByDensity {
  d_800: string;
  d_1000: string;
  d_1200: string;
  d_1400: string;
  d_1600: string;
  d_1800: string;
  d_2000: string;
}

export interface LightGrain {
  natural: string;
  autoclave: string;
}
