import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isSuccess: false,
  msg: "",
};

const loremSlice = createSlice({
  name: "lorem",
  initialState,
  reducers: {},
  extraReducers: () => {},
});


export default loremSlice