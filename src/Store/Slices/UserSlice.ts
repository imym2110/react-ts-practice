import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../Model/user";

interface LoginState {
  currentUser: User | null;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  currentUser: null,
  isLoggedIn: false,
};

const UserSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser(state: LoginState, action: PayloadAction<User>) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser(state: LoginState) {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = UserSlice.actions;
export default UserSlice.reducer;
