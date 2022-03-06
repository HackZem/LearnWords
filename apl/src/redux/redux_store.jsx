import { combineReducers, createStore } from "redux";
import addWordReducer from "./Reducers/addWord_reducer";

import updateNewTranslateTextReducer from "./Reducers/updateNewTranslateText_reducer";
import updateNewWordTextReducer from "./Reducers/updateNewWordText_reducer";

let reducers = combineReducers({
    addWord : addWordReducer,
    updateNewWordText : updateNewWordTextReducer,
    updateNewTranslateText : updateNewTranslateTextReducer
    

})

let store = createStore(reducers)

export default store