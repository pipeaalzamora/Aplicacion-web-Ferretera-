import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './slices/catalogSlice';

export const store = configureStore({
  reducer: {
    pagina_catalogo: catalogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 