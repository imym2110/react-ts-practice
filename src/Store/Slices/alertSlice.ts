import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  content: string;
  alertStatus: boolean;
  severity: string;
}
interface AlertObject {
  content: string;
  severity: string;
}

const initialState: AlertState = {
  content: "",
  alertStatus: false,
  severity: "success",
};

const AlertSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAlert(state: AlertState, action: PayloadAction<AlertObject>) {
      state.content = action.payload.content;
      state.alertStatus = true;
      state.severity = action.payload.severity;
    },
    removeAlert(state: AlertState) {
      state.content = "";
      state.alertStatus = false;
    },
  },
});

export const { setAlert, removeAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
