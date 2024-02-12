import { PropTypes } from "prop-types"

/**
 * Create banner image 
 * @returns 
 */
function Banner({image, span, text}) {
    
    return (
        <div className="banner">
           <div className="banner__content">
            <img src={ image } alt="image banniere" />
            { text ? (<h1><span>{ span }</span>{ text }</h1>) : " " }
           </div>
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    text:  PropTypes.string
}

export default Banner