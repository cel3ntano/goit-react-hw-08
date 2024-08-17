import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, setToken, swagger } from "../../config/swagger";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await swagger.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await swagger.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await swagger.post("users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Token doesn't exist");
    }
    try {
      setToken(savedToken);
      const { data } = await swagger("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
