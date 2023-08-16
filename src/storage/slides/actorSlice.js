import {
    createSlice,
    createAsyncThunk,
    isRejectedWithValue,
  } from "@reduxjs/toolkit";
  import { APIKey, APIKeyTMDB } from "../../services/MovieApiKey";
  import { instance1, instance2 } from "../../services/MovieApi";
  