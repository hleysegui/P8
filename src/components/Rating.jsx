import starInactive from 'src/assets/images/starInactive.svg'
import starActive from 'src/assets/images/starActive.svg'
import { PropTypes } from "prop-types"

/**
 * Receive a number between 0 and 5 display star depends the notation
 * @param {string} notation 
 * @returns {HTMLElement}
 */
function Rating({notation}) {

    return (
        <div className="rating">
             {Array.from({ length: notation }, (n, i) => (
                <img key={i} src={starActive} alt={notation} />
            ))}
            {Array.from({ length: 5 - notation }, (n, i) => (
                <img key={i} src={starInactive} alt="inactive" />
            ))} 
        </div>
    )
}

Rating.propTypes = {
    notation: PropTypes.string.isRequired,
}

export default Rating