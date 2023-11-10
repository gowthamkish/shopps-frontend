import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../thunk/fetchUsersThunk";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  //   reducers: {
  //     getUsers: (state, action) => {
  //       state.users = action.payload;
  //     },
  //   },
});

export default userSlice.reducer;
// export const { getUsers } = userSlice.actions;
