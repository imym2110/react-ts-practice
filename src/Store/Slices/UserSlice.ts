import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  user_id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  location: string;
}

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
    loginUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = UserSlice.actions;
export default UserSlice.reducer;
