import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { priceApi } from "./api/priceApi";

const makeStore = () =>
  configureStore({
    reducer: {
      [priceApi.reducerPath]: priceApi.reducer,
    },
    middleware: (gDM) => gDM().concat(priceApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
