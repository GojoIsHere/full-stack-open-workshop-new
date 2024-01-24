import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  username: "",
  token: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logOutUser: (state) => {
      state.username = "";
      state.token = "";
    },
   
  },
});
export const { loginUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
