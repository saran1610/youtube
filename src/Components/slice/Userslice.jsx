import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
export const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { setuser, logout } = userslice.actions;
export const getuser = (state) => state.userinfo.user;
export default userslice.reducer;
