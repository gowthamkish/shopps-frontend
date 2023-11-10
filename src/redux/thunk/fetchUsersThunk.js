import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUser", () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data);
});
