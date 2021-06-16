import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./reducer/DashboardSlice";
export default configureStore({
  reducer: { DashboardSlice },
});
