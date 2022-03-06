
const UPDATENEWTRANSLATETEXT = "UPDATE-NEW-TRANSLATE-TEXT"

let initialState = {
    newTranslateText: ""
}


const updateNewTranslateTextReducer = (state = initialState, action) => {
    if (action.type === UPDATENEWTRANSLATETEXT) {
        state.newTranslateText = action.text
        
    }

    return state
}

export default updateNewTranslateTextReducer