import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: {},
  loading: false,
  message: "",
  isRegisterPass: false,
  isSignInPass: false,
  isAuth:false
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
        localStorage.setItem("token", res.data.token);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAuthentication = createAsyncThunk(
  'user/getAuthentication',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const res = await instance2.post('/authentication', null, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
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
      })
      .addCase(getAuthentication.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getAuthentication.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isAuth = action.payload.isAuth;
      })
      .addCase(getAuthentication.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.msg;
        state.isAuth = action.payload.isAuth;
      });
  },
});

export const { clearIsRegisterPassState } = userSlice.actions;
export default userSlice.reducer;
