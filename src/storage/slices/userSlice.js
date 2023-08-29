import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: {},
  loading: false,
  message: "",
  isRegisterPass: false,
  isSignInPass: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/register`, userData);
      console.log(res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/sign-in`, userData);
      console.log(res.data.token);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAuthentication = createAsyncThunk(
  "user/getAuthen",
  async (arg, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await instance2.post(`/authentication`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.token);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearIsRegisterPassState: (state, action) => {
      state.isRegisterPass = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isRegisterPass = action.payload.isRegisterPass;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isRegisterPass = action.payload.isRegisterPass;
      })
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isSignInPass = action.payload.isSignInPass;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isSignInPass = action.payload.isSignInPass;
      });
  },
});

export const { clearIsRegisterPassState } = userSlice.actions;
export default userSlice.reducer;
