// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";

const initialState = {
  user: {},
  isLoading: false,
  status: "",
  message: "",
  isRegisterPass: false,
  isSignInPass: false,
  isAuth: false,
  accessToken: localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : null,
  refreshToken: localStorage.getItem("refresh_token")
    ? localStorage.getItem("refresh_token")
    : null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/register`, userData);
      // console.log(res);
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
      // console.log(res.data.token);
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAuthentication = createAsyncThunk(
  "user/getAuthentication",
  async (arg, { rejectWithValue }) => {
    try {
      const token = await localStorage.getItem("access_token");
      if (!token) {
        throw new Error("Token not found");
      }
      // 2nd parameter is body if empty set it to {}
      const res = await instance2.post(
        `/authentication`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRefreshToken = createAsyncThunk(
  "user/getRefreshToken",
  async (arg, { rejectWithValue }) => {
    try {
      const token = await localStorage.getItem("refresh_token");
      if (!token) {
        throw new Error("Token not found");
      }
      // 2nd parameter is body if empty set it to {}
      const res = await instance2.post(
        `/refresh_token`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("access_token", action.payload.accessToken);
      localStorage.setItem("refresh_token", action.payload.refreshToken);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
    clearIsRegisterPassState: (state, action) => {
      state.isRegisterPass = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.isRegisterPass = action.payload.isRegisterPass;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.isRegisterPass = action.payload.isRegisterPass;
      })
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.message = action.payload.msg;
        state.isSignInPass = action.payload.is_sign_in_pass;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.isSignInPass = action.payload.is_sign_in_pass;
      })
      .addCase(getAuthentication.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(getAuthentication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.isAuth = action.payload.is_auth;
      })
      .addCase(getAuthentication.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.isAuth = action.payload.is_auth;
      })
      .addCase(getRefreshToken.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(getRefreshToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        localStorage.setItem("access_token", action.payload.access_token);
        localStorage.setItem("refresh_token", action.payload.refresh_token);
      })
      .addCase(getRefreshToken.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
      });
  },
});

export const { loginSuccess, logout, clearIsRegisterPassState } =
  authSlice.actions;
export default authSlice.reducer;
