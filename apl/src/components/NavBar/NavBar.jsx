import react from "react";
import { Link, NavLink } from "react-router-dom";
import cl from "./NavBar.module.css"
const NavBar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to="/content" className={({ isActive }) => isActive ? cl.active : cl.noActive}>Home</NavLink>
            </div>
            <div className={cl.item} >
                <NavLink to="/learn" className={({ isActive }) => isActive ? cl.active : cl.noActive}>Learn</NavLink>
            </div >
            
            <div className={cl.item}>
                <NavLink  to="/words" className={({ isActive }) => isActive ? cl.active : cl.noActive}>Words</NavLink>
            </div>
            
        </nav>
    )
}

export default NavBar;