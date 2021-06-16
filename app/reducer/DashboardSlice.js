import { createSlice } from "@reduxjs/toolkit";

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    users: [],
    orders: [],
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { setUser } = DashboardSlice.actions;

export default DashboardSlice.reducer;
