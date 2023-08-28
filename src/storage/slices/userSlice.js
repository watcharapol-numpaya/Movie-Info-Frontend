import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: {},
  status: "",
  loading: false,
  message: null,
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

export const getSignIn = createAsyncThunk(
  "user/getSignIn",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/login`, {});
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      });
  },
});

// export const {
//   /* Define any additional reducers if needed */
// } = userSlice.actions;
export default userSlice.reducer;
