import React from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

export default function HogList(piggies) {
    
    // const hogsToDisplay = piggies.map((piggie) => <HogTile name={piggie.name} image={piggie.image} specialty={piggie.specialty} weight={piggie.weight} greased={piggie.greased} medal={piggie["highest medal achieved"]} />)


    return(
        <div>
            <Filter />
            <ul className="hogList">
                {piggies.map((piggie) => (<HogTile name={piggie.name} image={piggie.image} specialty={piggie.specialty} weight={piggie.weight} greased={piggie.greased} medal={piggie["highest medal achieved"]} />))}
            </ul>
        </div>
    )
}