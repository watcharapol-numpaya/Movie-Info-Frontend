import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";

const initialState = {
  user: {},
};

export const getSignUp = createAsyncThunk(
  "user/getSignUp",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/register`, {});
      return res;
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
      .addCase(userSlice.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(userSlice.fulfilled, (state, action) => {
        state.user = action.payload;
        // Handle fulfilled state if needed
      })
      .addCase(userSlice.rejected, (state, action) => {
        // Handle rejected state if needed
      });
  },
});

export const {
  /* Define any additional reducers if needed */
} = userSlice.actions;
export default userSlice.reducer;
