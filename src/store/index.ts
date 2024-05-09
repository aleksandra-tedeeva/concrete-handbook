import { configureStore } from '@reduxjs/toolkit';
import concreteClassReducer from './concreteClassSlice';
import concreteMarkReducer from './concreteMarkSlice';
import reinforcementReducer from './reinforcementSlice';

const store = configureStore({
  reducer: {
    class: concreteClassReducer,
    mark: concreteMarkReducer,
    reinforcement: reinforcementReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
