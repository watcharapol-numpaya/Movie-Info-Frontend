import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "./authSlice";
import { decodeUser } from "../../services/tokenService";

const initialState = {
  user: {},
  isLoading: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    decodeUser: (state, action) => {
      state.user = decodeUser(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { clearIsRegisterPassState } = userSlice.actions;
export default userSlice.reducer;
