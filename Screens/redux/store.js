import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './constants/contactsSlice';
import { authReducer } from './auth/authSlice';
import { filtersReducer } from './filters/filtersSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
