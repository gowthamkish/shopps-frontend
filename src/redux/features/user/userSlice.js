import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../thunk/fetchUsersThunk";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// export const fetchUsers = createAsyncThunk("users/fetchUser", () => {
//   return axios
//     .get("https://fakestoreapi.com/products")
//     .then((response) => response.data);
// });

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
