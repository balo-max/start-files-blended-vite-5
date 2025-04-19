import { configureStore } from "@reduxjs/toolkit";
import  currencyReduders from './currency/currencySlie';

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
import storage from 'redux-persist/lib/storage';

const currencyPersistConfig = {
    key: 'currency',
    storage,
    whitelist: ['baseCurrency'],
};

const currencyPersistedReducer = persistReducer(currencyPersistConfig, currencyReduders);



export const store = configureStore({
    reducer: {
        currency: currencyPersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);