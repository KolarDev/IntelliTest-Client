import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// API Base URL - should be moved to environment variables in production
const API_BASE_URL = 'http://localhost:5050/api/v1/auths';

// Types
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ORG_ADMIN' | 'STAFF' | 'STUDENT';
  organization?: {
    id: string;
    name: string;
  };
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterOrgData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  domain?: string;
}

interface AuthResponse {
  status: string;
  message: string;
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}

// Configure axios interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Async thunks
export const loginUser = createAsyncThunk<AuthResponse, LoginCredentials>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      // Store tokens in localStorage
      localStorage.setItem('accessToken', response.data.tokens.accessToken);
      localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerOrganization = createAsyncThunk<AuthResponse, RegisterOrgData>(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, data);
      // Store tokens in localStorage
      localStorage.setItem('accessToken', response.data.tokens.accessToken);
      localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const sendOtp = createAsyncThunk<void, { email: string }>(
  'auth/sendOtp',
  async ({ email }, { rejectWithValue }) => {
    try {
      await axios.post(`${API_BASE_URL}/send-otp`, { email });
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to send OTP');
    }
  }
);

export const verifyOtp = createAsyncThunk<void, { email: string; otp: string }>(
  'auth/verifyOtp',
  async (data, { rejectWithValue }) => {
    try {
      await axios.post(`${API_BASE_URL}/verify-otp`, data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'OTP verification failed');
    }
  }
);

export const forgotPassword = createAsyncThunk<void, { email: string }>(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      await axios.post(`${API_BASE_URL}/forgot-password`, { email });
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to send reset OTP');
    }
  }
);

export const resetPassword = createAsyncThunk<void, { email: string; otp: string; newPassword: string }>(
  'auth/resetPassword',
  async (data, { rejectWithValue }) => {
    try {
      await axios.patch(`${API_BASE_URL}/reset-password`, data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Password reset failed');
    }
  }
);

export const getMe = createAsyncThunk<User, void>(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/me`);
      return response.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch user data');
    }
  }
);

export const logoutUser = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${API_BASE_URL}/logout`);
    } catch (error: any) {
      // Even if API call fails, we should still clear local storage
      console.error('Logout API error:', error);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  }
);

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearAuth: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    restoreAuth: (state) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        state.accessToken = token;
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.tokens.accessToken;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Register
      .addCase(registerOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerOrganization.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.tokens.accessToken;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Send OTP
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Verify OTP
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get Me
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { clearError, clearAuth, restoreAuth } = authSlice.actions;
export default authSlice.reducer;