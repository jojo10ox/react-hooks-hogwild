import React, { useState } from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

const HogList = ({piggies}) => {
    
    const [isGreased, setIsGreased] = useState('All')
    const [sortPigs, setSort] = useState("A")

    function handleSort(e) {
        setSort(e.target.value)
    }

    function handleSortPigs(sortPigs, piggies) {
        if (sortPigs === 'A') {
            return piggies.sort(function(a,b){
                if(a.name<b.name){
                    return -1
                }
                if(a.name>b.name){
                    return 1
                }
                return 0;
            })
        } else if (sortPigs === 'Z') {
            return piggies.sort(function(a,b){
                if(a.name>b.name){
                    return -1
                }
                if(a.name<b.name){
                    return 1
                }
                return 0;
            })
        } else if (sortPigs === 'light') {
            return piggies.sort(function(a,b){
                if(a.weight<b.weight){
                    return -1
                }
                if(a.weight>b.weight){
                    return 1
                }
                return 0;
            })
        } else if (sortPigs === 'heavy') {
            return piggies.sort(function(a,b){
                if(a.weight>b.weight){
                    return -1
                }
                if(a.weight<b.weight){
                    return 1
                }
                return 0;
            })
        }
    }


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
            <Filter 
            onSortChange = {handleSort}
            onCategoryChange={handleChange}/>
            <ul className="hogList">{handleSortPigs(sortPigs, hogsToDisplay).map((piggie) => <HogTile key = {piggie.name} name={piggie.name} image={piggie.image} specialty={piggie.specialty} weight={piggie.weight} greased={piggie.greased} medal={piggie["highest medal achieved"]} />)}
            </ul>
        </div>
    )
}

export default HogList;