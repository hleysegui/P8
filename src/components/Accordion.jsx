import { useState } from "react"
import arrowUp from '/src/assets/images/up-arrow.svg'
import arrowDown from '/src/assets/images/down-arrow.svg'

function Accordion({header, body}) {

    const [isVisible, setIsVisible ] = useState(true)

    const handleClick = event => {
        setIsVisible(current => !current)
    }

    return (
        <div className="accordion">
            <div onClick={handleClick} className="accordion__header">
                <h3>{header}</h3>
                {isVisible ? <img src={arrowUp} alt="arrow-up"/> : <img src={arrowDown} alt="arrow-down"/>}
            </div>
            <div className={isVisible ? 'accordion__body' : 'accordion__body active'}>
                {typeof body === 'string' 
                ? <div>{body}</div> 
                :   <ul>
                    {body.map((equipment, index) => (
                    <li key={`${equipment}-${index}`}>{equipment}</li>
                )) }
                </ul> 
                }
                
            </div>
        </div>
    )
}

export default Accordion