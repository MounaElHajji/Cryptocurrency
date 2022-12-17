import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import thunk from 'redux-thunk';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import News from '../components/News';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }).concat(
      thunk,
      cryptoApi.middleware,
      cryptoNewsApi.middleware
    )
});