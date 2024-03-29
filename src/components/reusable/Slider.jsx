import { useState } from "react"
import  rightArrow from "src/assets/images/right-arrow.svg"
import leftArrow  from "src/assets/images/left-arrow.svg"
import { PropTypes } from "prop-types"

/**
 * Get an array with picture for create slider
 * @param {Array} propTypes picture 
 * @param {String} propTypes alt 
 * @returns {HTMLElement}
 */
function Slider({picture, alt}) {

    const[index, setIndex ] = useState(0) 

    function prevSlide() { return index === 0 ? setIndex(picture.length -1) : setIndex(index -1) }
    function nextSlide() { return index >= picture.length -1 ? setIndex(0) : setIndex(index +1)}

    return (
        <div className="slider">
            {picture.length > 1 ? (
                <div>
                    <div className="slider__button">
                        <img src={leftArrow} onClick={prevSlide} alt="prev-slide"/>
                        <img src={rightArrow} onClick={nextSlide} alt="next-slide" />
                    </div>
                    <div className="slider__count">
                        {index + 1}/{picture.length}
                    </div>
                </div>
            ) : null }
            <div className="slider__image">
                <img src={picture[index]} alt={ alt } className="" />
            </div>
        </div>
        
        
    )
} 

Slider.propTypes = {
    picture: PropTypes.array.isRequired,
    alt: PropTypes.string,
}

export default Slider