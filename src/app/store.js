import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }).concat(
      thunk,
      cryptoApi.middleware
    ),
});