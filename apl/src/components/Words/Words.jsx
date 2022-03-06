import cl from "./Words.module.css"
import WordItem from "./WordItem/WordItem";
import SettingItem from "./SettingItem/SettingItem";
import React from "react";
import { addWordActionCreator, mapWordActionCreator, updateNewTranslateTextActionCreator, updateNewWordTextActionCreator } from "../../redux/store";



const newWordElement = React.createRef()



const Words = (props) => {

    const state = props.state

    const giveWord = () => {
        props.dispatch(addWordActionCreator())
    }

    let onWordChange = () => {
        let text = newWordElement.current.value
        props.dispatch(updateNewWordTextActionCreator(text))
    }

    let onTranslateChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewTranslateTextActionCreator(text))
    }
    


    
    const wordsElements = state.wordsData.map(key => <WordItem name={key.name} id={key.id} />);
    
    return (
        <div className={cl.settingWords}>
            <div className={cl.arrayWords}>
                {wordsElements}
                <textarea onChange={onWordChange} ref={newWordElement} value={state.newWordText} />
                <button onClick={giveWord}>test</button>
            </div>
            <div className={cl.settingWord}>
                <p>Translate</p>

                <div><textarea onChange={onTranslateChange} value={state.newTranslateText}></textarea></div>
                
                
            </div>

        </div>
    )
}

export default Words;