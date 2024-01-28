import { configureStore } from "@reduxjs/toolkit";
import VehicleListSlice from "./reducers/VehicleListSlice";

export const store = configureStore({
  reducer: {
    VehicleListSlice: VehicleListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
