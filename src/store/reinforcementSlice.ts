import { createSlice } from '@reduxjs/toolkit';
import raw_data from '../data/reinforcement_sortament.json';
import { ReinforcementSortament } from '../types/data/reinforcement_sortament';
const data = raw_data as ReinforcementSortament[];

export const reinforcementSlice = createSlice({
  name: 'reinforcement_sortament',
  initialState: {
    data,
    headers: ['A240', 'A400', 'A500', 'A600', 'A600C', 'B500', 'Bp500']
  },
  reducers: {}
});

export default reinforcementSlice.reducer;
