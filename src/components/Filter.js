import React from "react";

export default function Filter({onCategoryChange}) {
    return (
        <div className="filterWrapper">
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Greased/Ungreased</option>
                <option value="greased">Greased</option>
                <option value="ungreased">Ungreased</option>
            </select>
        </div>
    )
}