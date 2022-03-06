import addWordReducer from "./Reducers/addWord_reducer"
import updateNewTranslateTextReducer from "./Reducers/updateNewTranslateText_reducer"
import updateNewWordTextReducer from "./Reducers/updateNewWordText_reducer"

const ADDWORD = "ADD-WORD"
const UPDATENEWWORDTEXT = "UPDATE-NEW-WORD-TEXT"
const UPDATENEWTRANSLATETEXT = "UPDATE-NEW-TRANSLATE-TEXT"

const store = {
    _state : {

        wordsData: [
            { name: "Road", id: 1 },
            { name: "Load", id: 2 },
            { name: "Old", id: 3 },
            { name: "Wind", id: 4 },
            { name: "Page", id: 5 },
            { name: "Bar", id: 6 },
            { name: "Kill", id: 7 }
        ],
        newWordText: "word",
        newTranslateText: ""
    },
    getState() {
        return this._state
    },

    _renderSite () {},
    
    
    _updateNewTranslateText (text) {
        this._state.newTranslateText = text
        this._renderSite(this._state)
    },

    subscribe (observer) {
        this._renderSite = observer
    },
    dispatch(action) {
        this._state = addWordReducer(this._state, action)
        this._state = updateNewWordTextReducer(this._state, action)
        this._state = updateNewTranslateTextReducer(this._state, action)

        this._renderSite()
    }
    
}

export const addWordActionCreator = () => ({type: ADDWORD})

    
export const updateNewWordTextActionCreator = (text) => ({type: UPDATENEWWORDTEXT, text: text})
   
export const updateNewTranslateTextActionCreator = (text) => ({type: UPDATENEWTRANSLATETEXT, text: text})

export default store
