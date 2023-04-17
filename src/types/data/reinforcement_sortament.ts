export interface ReinforcementSortament {
  nominal_diameter: number;
  theoretical_1m: number;
  cross_beam_area: CrossBeamArea;
  armature_class: { [key: string]: boolean };
}

export interface CrossBeamArea {
  beam_1: number;
  beam_2: number;
  beam_3: number;
  beam_4: number;
  beam_5: number;
  beam_6: number;
  beam_7: number;
  beam_8: number;
  beam_9: number;
}
