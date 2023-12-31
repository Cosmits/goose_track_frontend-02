import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/slice';
import { reviewsApi } from './reviews/reviewsApi';
import { tasksApi } from './tasks/tasksApi';
import { themeReducer } from './theme/themeSlice';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    theme: persistReducer(themePersistConfig, themeReducer),   
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    reviewsApi.middleware,
    tasksApi.middleware,
  ],
});

export const persistor = persistStore(store);
