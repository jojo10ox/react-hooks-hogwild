import React from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

const HogList = ({piggies}) => {
    
  const hogsToDisplay = piggies.map((piggie) => <HogTile key = {piggie.name} name={piggie.name} image={piggie.image} specialty={piggie.specialty} weight={piggie.weight} greased={piggie.greased} medal={piggie["highest medal achieved"]} />)


    return(
        <div>
            <Filter />
            <ul className="hogList">{hogsToDisplay}
            </ul>
        </div>
    )
}

export default HogList;