import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../../thunk/login/LoginThunk";

//default value
const initialState = {
  data: {},
  name:'',
  isLoading: false,
  isAuthenticated:false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: loginUser,
    logout: logoutUser
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
