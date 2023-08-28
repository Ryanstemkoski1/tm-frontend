import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@app/types/user';
import type { SigninResponse } from '../services/auth/type';

export interface AuthState {
  profile: User;
  token?: string | null;
}

const initialState: AuthState = {
  profile: {
    email: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<SigninResponse>) => {
      state.token = action.payload.token;
      state.profile = action.payload;
    },
    logout: (state) => {
      state.profile = initialState.profile;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, logout } = authSlice.actions;

export default authSlice.reducer;
