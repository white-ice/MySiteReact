import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { serverLogin } from './services';
import { ServerLoginSchema } from './type';

const initialState: ServerLoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const ServerLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(serverLogin.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(serverLogin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(serverLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: ServerLoginActions } = ServerLoginSlice;
export const { reducer: ServerLoginReducer } = ServerLoginSlice;
