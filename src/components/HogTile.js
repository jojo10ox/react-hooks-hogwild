import React, { useState } from "react";

export default function HogTile(props) {
    
    let [showPig, setShowPig] = useState(false)

    const handleClick = () =>{
        setShowPig((showPig) = !showPig)
    }
    
    const smallPig = (
        <div className="pigTile">
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name}/>
        </div>
    )

    const bigPig = (
        <div className="pigTile">
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name}/>
            <p>Specialty: {props.specialty}</p>
            <p>Weight: {props.weight}</p>
            <p>{props.greased ? "Greased" : "Ungreased" }</p>
            <p>Highest Medal Achieved: {props.medal}</p>
        </div>
    )

    return (
        <div onClick={handleClick}>{showPig ? bigPig : smallPig}</div>
    )
}