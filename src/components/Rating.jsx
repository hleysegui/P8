import { useState } from "react"
import starInactive from '/src/assets/images/starInactive.svg'
import starActive from '/src/assets/images/starActive.svg'


function Rating({notation}) {

    return (
        <div className="rating">
             {Array.from({ length: notation }, (n, i) => (
                <img key={i} src={starActive} alt={notation} />
            ))}
            {Array.from({ length: 5 - notation }, (n, i) => (
                <img key={i} src={starInactive} alt={notation} />
            ))} 
        </div>
    )
}

export default Rating


