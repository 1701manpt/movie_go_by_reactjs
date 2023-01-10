import { combineReducers, configureStore } from '@reduxjs/toolkit'
import customerReducer from '~/redux/slices/customer'
import employeeReducer from '~/redux/slices/employee'
import userReducer from '~/redux/slices/user'
import roleReducer from '~/redux/slices/role'
import authReducer from '~/redux/slices/auth'
import productReducer from '~/redux/slices/product'
import orderReducer from '~/redux/slices/order'
import categoryReducer from '~/redux/slices/category'
import uiReducer from '~/redux/slices/ui'

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
    employee: employeeReducer,
    user: userReducer,
    role: roleReducer,
    auth: authReducer,
    product: productReducer,
    order: orderReducer,
    category: categoryReducer,
    ui: uiReducer,
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
