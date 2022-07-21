import React from "react";

export default function Filter({onCategoryChange,onSortChange}) {


    return (
        <div className="filterWrapper">
            <select name="sort" onChange={onSortChange}>
                <option value="A">A to Z</option>
                <option value="Z">Z to A</option>
                <option value="light"> Weight Ascending</option>
                <option value="heavy">Weight Descending</option>
            </select>
        
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Greased/Ungreased</option>
                <option value="greased">Greased</option>
                <option value="ungreased">Ungreased</option>
            </select>
        </div>
    )
}