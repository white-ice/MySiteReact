import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';
// import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface ServerLoginProps {
  username: string;
  password: string;
}

export const serverLogin = createAsyncThunk<
  User,
  ServerLoginProps,
  { rejectValue: string }
>('login/serverLogin', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData,
    );

    if (!response.data) {
      throw new Error();
    }

    // localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    // thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('error');
  }
});
