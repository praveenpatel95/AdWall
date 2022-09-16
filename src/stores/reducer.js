import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";


const authPersistConfig = {
    key: "",
    storage: storage,
    blacklist: [],
};

const rootReducer = combineReducers({

});

export default rootReducer;
