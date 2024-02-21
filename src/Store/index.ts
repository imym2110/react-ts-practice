import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import alertSlice from "./Slices/alertSlice";
import ticketSlice from "./Slices/ticketSlice";

export const store = configureStore({
  reducer: {
    userReducer: UserSlice,
    alertReducer: alertSlice,
    ticketReducer: ticketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
