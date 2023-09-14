import React from "react";
// import SearchBar from "../SearchBarComponent/SearchBar";
import SearchBar from "../SearchBarComponent/SearchBar"
// import './NavBar.module.css'
import style from './NavBar.module.css'

import { NavLink } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
    return (
        <nav className={style.nav}>
            
            
            <button>
                <NavLink to = '/home'>HOME</NavLink>
            </button>

            <button >
                <NavLink to = '/Favorites'>FAVORITES</NavLink>
            </button>
            
            <SearchBar onSearch = {onSearch} />

            <button>
                <NavLink to = '/About'>ABOUT</NavLink>
            </button>
    
            <button onClick={logout}>LOGOUT</button>

        </nav>
    )
}



