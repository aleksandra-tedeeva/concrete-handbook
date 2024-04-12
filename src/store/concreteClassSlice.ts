import { createSlice } from '@reduxjs/toolkit';
import raw_data from '../data/concrete_class.json';
import { ConcreteClass } from '../types/data/concrete_class';
const data = raw_data as ConcreteClass[];

// Классы бетона
const headers: string[] = [];

// Значения для предельных состояний второй группы
const second_group: ConcreteClassGroupState = {
  compression_heavy: [],
  compression_light: [],
  compression_cellular: [],
  expansion_heavy: [],
  expansion_light: [],
  expansion_cellular: []
};

// Значения для предельных состояний первой группы
const first_group: ConcreteClassGroupState = {
  compression_heavy: [],
  compression_light: [],
  compression_cellular: [],
  expansion_heavy: [],
  expansion_light: [],
  expansion_cellular: []
};

// Модуль упругости
const resilience: ResilienceState = {
  heavy: [],
  grain_natural: [],
  grain_autoclave: [],
  light_800: [],
  light_1000: [],
  light_1200: [],
  light_1400: [],
  light_1600: [],
  light_1800: [],
  light_2000: [],
  cellular_500: [],
  cellular_600: [],
  cellular_700: [],
  cellular_800: [],
  cellular_900: [],
  cellular_1000: [],
  cellular_1100: [],
  cellular_1200: []
};

// Соотношение класса бетона к марке бетона
const classToMarkMap = new Map<string, string>();

// Преобразование данных для таблиц
data.forEach((concreteClass) => {
  headers.push(concreteClass.name);

  second_group.compression_heavy.push(concreteClass.second_group.compression.heavy);
  second_group.compression_light.push(concreteClass.second_group.compression.light);
  second_group.compression_cellular.push(concreteClass.second_group.compression.cellular);
  second_group.expansion_heavy.push(concreteClass.second_group.expansion.heavy);
  second_group.expansion_light.push(concreteClass.second_group.expansion.light);
  second_group.expansion_cellular.push(concreteClass.second_group.expansion.cellular);

  first_group.compression_heavy.push(concreteClass.first_group.compression.heavy);
  first_group.compression_light.push(concreteClass.first_group.compression.light);
  first_group.compression_cellular.push(concreteClass.first_group.compression.cellular);
  first_group.expansion_heavy.push(concreteClass.first_group.expansion.heavy);
  first_group.expansion_light.push(concreteClass.first_group.expansion.light);
  first_group.expansion_cellular.push(concreteClass.first_group.expansion.cellular);

  resilience.heavy.push(concreteClass.resilience.heavy);
  resilience.grain_natural.push(concreteClass.resilience.light_grain.natural);
  resilience.grain_autoclave.push(concreteClass.resilience.light_grain.autoclave);
  resilience.light_800.push(concreteClass.resilience.light_aerated_by_density.d_800);
  resilience.light_1000.push(concreteClass.resilience.light_aerated_by_density.d_1000);
  resilience.light_1200.push(concreteClass.resilience.light_aerated_by_density.d_1200);
  resilience.light_1400.push(concreteClass.resilience.light_aerated_by_density.d_1400);
  resilience.light_1600.push(concreteClass.resilience.light_aerated_by_density.d_1600);
  resilience.light_1800.push(concreteClass.resilience.light_aerated_by_density.d_1800);
  resilience.light_2000.push(concreteClass.resilience.light_aerated_by_density.d_2000);
  resilience.cellular_500.push(concreteClass.resilience.cellular_autoclave_by_density.d_500);
  resilience.cellular_600.push(concreteClass.resilience.cellular_autoclave_by_density.d_600);
  resilience.cellular_700.push(concreteClass.resilience.cellular_autoclave_by_density.d_700);
  resilience.cellular_800.push(concreteClass.resilience.cellular_autoclave_by_density.d_800);
  resilience.cellular_900.push(concreteClass.resilience.cellular_autoclave_by_density.d_900);
  resilience.cellular_1000.push(concreteClass.resilience.cellular_autoclave_by_density.d_1000);
  resilience.cellular_1100.push(concreteClass.resilience.cellular_autoclave_by_density.d_1100);
  resilience.cellular_1200.push(concreteClass.resilience.cellular_autoclave_by_density.d_1200);

  classToMarkMap.set(concreteClass.name, concreteClass.corresponding_mark);
});

export interface ConcreteClassState {
  data: ConcreteClass[];
  headers: string[];
  second_group: ConcreteClassGroupState;
  first_group: ConcreteClassGroupState;
  resilience: ResilienceState;
  classToMarkMap: Map<string, string>;
}

export interface ConcreteClassGroupState {
  compression_heavy: string[];
  compression_light: string[];
  compression_cellular: string[];
  expansion_heavy: string[];
  expansion_light: string[];
  expansion_cellular: string[];
}

export interface ResilienceState {
  heavy: string[];
  grain_natural: string[];
  grain_autoclave: string[];
  light_800: string[];
  light_1000: string[];
  light_1200: string[];
  light_1400: string[];
  light_1600: string[];
  light_1800: string[];
  light_2000: string[];
  cellular_500: string[];
  cellular_600: string[];
  cellular_700: string[];
  cellular_800: string[];
  cellular_900: string[];
  cellular_1000: string[];
  cellular_1100: string[];
  cellular_1200: string[];
}

export const concreteClassSlice = createSlice({
  name: 'concrete_class',
  initialState: {
    data,
    headers,
    first_group,
    second_group,
    resilience,
    classToMarkMap
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default concreteClassSlice.reducer;
