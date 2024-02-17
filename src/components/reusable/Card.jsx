import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'

/**
 * Create components card for display properties
 * @param { number } id 
 * @param { String } title
 * @param { String } cover
 * @returns {HTMLElement}
 */
function Card({id, title, cover}) {

    return (
        <div className='thumb' data-testid={id}>
            <Link to={ `/logement/${id}` } >
                <span className='thumb__title'>{ title }</span>
                <img src={ cover } alt={`Logement ${title}`} />
            </Link>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Card