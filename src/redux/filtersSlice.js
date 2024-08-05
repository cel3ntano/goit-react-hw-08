import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({ name: "filter", initialState, reducers: {} });

export const filterReducer = slice.reducer;
