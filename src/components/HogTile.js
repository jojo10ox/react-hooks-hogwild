import React, { useState } from "react";

export default function HogTile(props) {

    let [showPig, setShowPig] = useState(false)

    const handleClick = () =>{
        setShowPig((showPig) = !showPig)
    }

    return(
        <div className="pigTile" onClick={handleClick}>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name}/>
            {/* {console.log(props.image)} */}
        </div>
    )
}