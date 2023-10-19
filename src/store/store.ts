import { configureStore } from "@reduxjs/toolkit";
import { reducerMessages } from "./reducerMessages";

const store = configureStore({
  reducer: {
    reducerMessages,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
