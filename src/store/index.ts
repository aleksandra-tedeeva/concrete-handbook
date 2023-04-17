import { configureStore } from "@reduxjs/toolkit";
import concreteClassReducer from "./concreteClassSlice";
import concreteMarkReducer from "./concreteMarkSlice";
import reinforcementReducer from "./reinforcementSlice";

const store = configureStore({
  reducer: {
    class: concreteClassReducer,
    mark: concreteMarkReducer,
    reinforcement: reinforcementReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
