import { NavLink } from "react-router-dom";
import cl from ".././Words.module.css"



const WordItem = (props) => {
    let path = "/words/" + props.id
    return (
        <div className={cl.word}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default WordItem;