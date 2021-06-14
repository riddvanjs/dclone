import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import movieSlice from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice
  },
});

