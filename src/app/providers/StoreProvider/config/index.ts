import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../types";
import { counterReducer } from "features/counter";
import { userReducer } from "entities/User";
import { DataPageReducer } from "widgets/ContentBlock/model/slice";
import { NavbarReducer } from "widgets/Navbar";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      content: DataPageReducer,
      navbar: NavbarReducer,
    },
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}

const store = createReduxStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
