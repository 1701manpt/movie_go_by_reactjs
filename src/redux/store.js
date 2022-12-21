import { combineReducers, configureStore } from "@reduxjs/toolkit"
import customerReducer from "./slices/customer"
import authReducer from "./slices/auth"
import productReducer from "./slices/product"
import orderReducer from "./slices/order"
import categoryReducer from "./slices/category"

// redux persist
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    customer: customerReducer,
    auth: authReducer,
    product: productReducer,
    order: orderReducer,
    category: categoryReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

//Global store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)