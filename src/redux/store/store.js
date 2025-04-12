
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../slices'; 

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login','watchlist'], //  persist only `login`and watchlist slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
// Create the persistor
 const persistor = persistStore(store);

export  {store,persistor};


