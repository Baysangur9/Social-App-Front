import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: null,
  initialState: {
    user: null,
    status: "idle",
  },
  reducers: {},
});

export default userSlice.reducer;
