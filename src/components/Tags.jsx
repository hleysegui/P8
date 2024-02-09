import PropTypes from 'prop-types'

function Tags({tags}) {

    return (
        <div className="tags">
            <ul>
                {tags.map((tag, index) => (
                    <li key={`${tag}-${index}`}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

Tags.propTypes = {
    tags: PropTypes.array 
}

export default Tags