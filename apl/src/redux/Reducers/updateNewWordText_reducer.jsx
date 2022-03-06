
const UPDATENEWWORDTEXT = "UPDATE-NEW-WORD-TEXT"


let initialState = {
    newWordText: "word"
}

const updateNewWordTextReducer = (state = initialState, action) => {
    if (action.type === UPDATENEWWORDTEXT) {
        state.newWordText = action.text
    }

    return state
}

export default updateNewWordTextReducer