import { createSlice } from "@reduxjs/toolkit";
import raw_data from "../data/concrete_mark.json";
import { ConcreteMark } from "../types/data/concrete_mark";
const data = raw_data as ConcreteMark[];

// Классы бетона
const headers: string[] = [];

// Значения для предельных состояний второй группы
const second_group: ConcreteMarkSecondGroupState = {
  compression_heavy: [],
  compression_aerated: [],
  compression_cellular_a: [],
  compression_cellular_b: [],
  expansion_heavy: [],
  expansion_aerated_dense: [],
  expansion_aerated_porous: [],
  expansion_cellular_a: [],
  expansion_cellular_b: [],
};

// Значения для предельных состояний первой группы
const first_group: ConcreteMarkFirstGroupState = {
  compression_heavy: [],
  compression_aerated: [],
  compression_cellular_a: [],
  compression_cellular_b: [],
  compression_large_porous: [],
  expansion_heavy: [],
  expansion_aerated_dense: [],
  expansion_aerated_porous: [],
  expansion_cellular_a: [],
  expansion_cellular_b: [],
};

// Соотношение марки бетона к классу бетона
const markToClassMap = new Map<string, string>();

// Преобразование данных для таблиц
data.forEach((concreteMark) => {
  headers.push(concreteMark.name);

  second_group.compression_heavy.push(
    concreteMark.second_group.compression.heavy
  );
  second_group.compression_aerated.push(
    concreteMark.second_group.compression.aerated
  );
  second_group.compression_cellular_a.push(
    concreteMark.second_group.compression.cellular_a
  );
  second_group.compression_cellular_b.push(
    concreteMark.second_group.compression.cellular_b
  );
  second_group.expansion_heavy.push(concreteMark.second_group.expansion.heavy);
  second_group.expansion_aerated_dense.push(
    concreteMark.second_group.expansion.aerated_dense
  );
  second_group.expansion_aerated_porous.push(
    concreteMark.second_group.expansion.aerated_porous
  );
  second_group.expansion_cellular_a.push(
    concreteMark.second_group.expansion.cellular_a
  );
  second_group.expansion_cellular_b.push(
    concreteMark.second_group.expansion.cellular_b
  );

  first_group.compression_heavy.push(
    concreteMark.first_group.compression.heavy
  );
  first_group.compression_aerated.push(
    concreteMark.first_group.compression.aerated
  );
  first_group.compression_large_porous.push(
    concreteMark.first_group.compression.large_porous!
  );
  first_group.compression_cellular_a.push(
    concreteMark.first_group.compression.cellular_a
  );
  first_group.compression_cellular_b.push(
    concreteMark.first_group.compression.cellular_b
  );
  first_group.expansion_heavy.push(concreteMark.first_group.expansion.heavy);
  first_group.expansion_aerated_dense.push(
    concreteMark.first_group.expansion.aerated_dense
  );
  first_group.expansion_aerated_porous.push(
    concreteMark.first_group.expansion.aerated_porous
  );
  first_group.expansion_cellular_a.push(
    concreteMark.first_group.expansion.cellular_a
  );
  first_group.expansion_cellular_b.push(
    concreteMark.first_group.expansion.cellular_b
  );

  markToClassMap.set(concreteMark.name, concreteMark.corresponding_class);
});

export interface ConcreteMarkState {
  data: ConcreteMark[];
  headers: string[];
  second_group: ConcreteMarkSecondGroupState;
  first_group: ConcreteMarkFirstGroupState;
  classToMarkMap: Map<string, string>;
}

export interface ConcreteMarkSecondGroupState {
  compression_heavy: string[];
  compression_aerated: string[];
  compression_cellular_a: string[];
  compression_cellular_b: string[];
  expansion_heavy: string[];
  expansion_aerated_dense: string[];
  expansion_aerated_porous: string[];
  expansion_cellular_a: string[];
  expansion_cellular_b: string[];
}

export interface ConcreteMarkFirstGroupState
  extends ConcreteMarkSecondGroupState {
  compression_large_porous: string[];
}

export const concreteMarkSlice = createSlice({
  name: "concrete_mark",
  initialState: {
    data,
    headers,
    second_group,
    first_group,
    markToClassMap,
  },
  reducers: {},
});

export default concreteMarkSlice.reducer;
