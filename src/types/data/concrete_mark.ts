export interface ConcreteMark {
  name: string;
  second_group: Group;
  first_group: Group;
  corresponding_class: string;
}

export interface Group {
  compression: Compression;
  expansion: Expansion;
}

export interface Compression {
  heavy: string;
  aerated: string;
  cellular_a: string;
  cellular_b: string;
  large_porous?: string;
}

export interface Expansion {
  heavy: string;
  aerated_dense: string;
  aerated_porous: string;
  cellular_a: string;
  cellular_b: string;
}
