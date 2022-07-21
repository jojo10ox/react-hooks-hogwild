import React, { useState } from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

const HogList = ({piggies}) => {
    
    const [isGreased, setIsGreased] = useState('All')

    function handleChange(e) {
        setIsGreased(e.target.value)
    }

    const hogsToDisplay = piggies.filter((piggie) => {
        if (isGreased === "All") {
            return true
        } else if (isGreased === "greased") {
            return piggie.greased === true
        } else if (isGreased === "ungreased" ) {
            return piggie.greased === false
        }
    })


    return(
        <div>
            <Filter onCategoryChange={handleChange}/>
            <ul className="hogList">{hogsToDisplay.map((piggie) => <HogTile key = {piggie.name} name={piggie.name} image={piggie.image} specialty={piggie.specialty} weight={piggie.weight} greased={piggie.greased} medal={piggie["highest medal achieved"]} />)}
            </ul>
        </div>
    )
}

export default HogList;