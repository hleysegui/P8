import { useState } from "react"
import arrowUp from 'src/assets/images/up-arrow.svg'

/**
 * Component Accordion the content is hidden and after click become visible
 * @param {String} header title to display  
 * @param {String | Array} body to display on click can be a string or an Array
 * @returns {HTMLElement}
 */
function Accordion({header, body}) {

    const [isVisible, setIsVisible ] = useState(true)

    const handleClick = event => {
        setIsVisible(current => !current)
    }

    const rotated = event => {
        setIsVisible(current => !current)
        var arrow = event.target
        {isVisible ? arrow.className = "arrow-up open" : arrow.className = "arrow-up" }
        {isVisible ? arrow.alt = "arrow-up open" : arrow.alt = "arrow-up" }
        setIsVisible(current => !current)
    } 

    return (
        <div className="accordion">
            <div onClick={handleClick} className="accordion__header">
                <h3>{header}</h3>
                <img src={arrowUp} alt="arrow-up" id="icon" className="arrow-up" onClick={rotated} />
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