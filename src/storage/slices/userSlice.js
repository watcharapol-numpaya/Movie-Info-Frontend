import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: {},
  loading: false,
  message: "",
  isRegisterPass: false,
  isSignInPass: false,
  isAuth: false,
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
        state.isSignInPass = action.payload.is_sign_in_pass;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isSignInPass = action.payload.is_sign_in_pass;
      })
      .addCase(getAuthentication.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getAuthentication.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isAuth = action.payload.is_auth;
      })
      .addCase(getAuthentication.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isAuth = action.payload.is_auth;
      })
      .addCase(getRefreshToken.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getRefreshToken.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
      })
      .addCase(getRefreshToken.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;

      });
  },
});

export const { clearIsRegisterPassState } = userSlice.actions;
export default userSlice.reducer;
