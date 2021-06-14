import { createStore, combineReducers } from "redux";
import userReducer from "../features/user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const reducers = combineReducers({
  userReducer
})


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['reducers']
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };