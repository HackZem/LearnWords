
const ADDWORD = "ADD-WORD"

let initialState = {
    wordsData: [
        { name: "Road", id: 1 },
        { name: "Load", id: 2 },
        { name: "Old", id: 3 },
        { name: "Wind", id: 4 },
        { name: "Page", id: 5 },
        { name: "Bar", id: 6 },
        { name: "Kill", id: 7 }
    ],
    newWordText: "word"
}

const addWordReducer = (state = initialState, action) => {
    if (action.type === ADDWORD) {
        let newWord = {
            id: 8,
            name: state.newWordText
        }
        state.wordsData.push(newWord)
        state.newWordText = ""
    }

    return state
}

export default addWordReducer