import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import todosReducer from './todosSlice';
import weatherReducer from './weatherSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;