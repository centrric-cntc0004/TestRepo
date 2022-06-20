import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import AsyncStorage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'
import userLogin from '../modules/authentication/api/reducer'


const appReducer = combineReducers({
    userLogin
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    persistReducer(rootPersistConfig, rootReducer),
    composeEnhancer(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store, persistor }