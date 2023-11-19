import React from "react";
import './dropdown.css'
export default function DropDown({sortCategories, handleSelectedCategory}) {
    console.log(sortCategories);
    return (
        <div className="dropdown-container">
            <div className="drop-down-list">
                {sortCategories?.length > 0 && sortCategories.map((item)=> (
                    <div className="drop-down-item" onClick={() => handleSelectedCategory(item)}>{item}</div>
                ))}             
            </div>
        </div>
    )
}