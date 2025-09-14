import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import tabReducer from "./slices/tab-slice";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
