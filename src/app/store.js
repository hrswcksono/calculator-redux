import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "../features/counter/calculateSlice";

export default configureStore({
  reducer: {
    calculate: calculateSlice
  },
});
