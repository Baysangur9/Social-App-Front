import {configureStore} from "@reduxjs/toolkit";
import userReaducer from "./features/userSlice";
export const store = configureStore({
  reducer: {
    user: userReaducer,
  },
});
