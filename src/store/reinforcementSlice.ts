import { createSlice } from '@reduxjs/toolkit';
import raw_data from '../data/reinforcement_sortament.json';
import raw_classes from '../data/reinforcement_class.json';
import { ReinforcementSortament } from '../types/data/reinforcement_sortament';
import { ReinforcementClass } from '../types/data/reinforcement_class';
const data = raw_data as ReinforcementSortament[];
const classes = raw_classes as ReinforcementClass[];

export const reinforcementSlice = createSlice({
  name: 'reinforcement_sortament',
  initialState: {
    data,
    classes,
    headers: ['A240', 'A400', 'A500', 'A600', 'A600C', 'B500', 'Bp500']
  },
  reducers: {}
});

export default reinforcementSlice.reducer;
