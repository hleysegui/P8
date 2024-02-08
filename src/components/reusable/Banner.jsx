import { PropTypes } from "prop-types"

/**
 * Create banner image 
 * @returns 
 */
function Banner({image, text}) {
    
    return (
        <div className="banner">
           <div className="banner__content">
            <img src={ image } alt="image banniere" />
            { text ? (<p>{ text }</p>) : " " }
           </div>
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    text:  PropTypes.string
}

export default Banner