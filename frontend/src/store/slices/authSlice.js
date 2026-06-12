import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

const token = localStorage.getItem("token");

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post(
        "/auth/login",
        credentials
      );

      localStorage.setItem(
        "token",
        response.data.data.token
      );

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/auth/me");

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to load user"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user:
      JSON.parse(
        localStorage.getItem("user")
      ) || null,
    token: token || null,
    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        loginUser.fulfilled,
        (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token =
            action.payload.token;

          localStorage.setItem(
            "user",
            JSON.stringify(
              action.payload.user
            )
          );
        }
      )

      .addCase(
        loginUser.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )

      .addCase(
        getCurrentUser.fulfilled,
        (state, action) => {
          state.user = action.payload;
        }
      );
  },
});

export const { logout } =
  authSlice.actions;

export default authSlice.reducer;