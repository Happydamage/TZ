import React from "react"
import search2 from "../images/search2.svg";
import facaretdown from "../images/fa-caret-down.png";
import './search-panel.css'


const Search_panel = () => {
    return (<div className="search-panel">
            <div className="search-panel__icon">
                <img src={search2} alt='lul'/>
                <img className="search-panel__caret-down" src={facaretdown} alt="lul"/>
            </div>
            <input className="search-panel__input" type="search" value="Поле поиска..."/>
        </div>)
}

export default Search_panel