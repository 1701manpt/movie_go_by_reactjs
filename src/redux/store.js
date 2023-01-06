import { combineReducers, configureStore } from '@reduxjs/toolkit'
import customerReducer from '~/redux/slices/customer'
import authReducer from '~/redux/slices/auth'
import productReducer from '~/redux/slices/product'
import orderReducer from '~/redux/slices/order'
import categoryReducer from '~/redux/slices/category'
import menuReducer from '~/redux/slices/menu'

// redux persist
import storage from 'redux-persist/lib/storage'
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
    menu: menuReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

//Global store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)
