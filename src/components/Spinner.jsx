import spinner from 'src/assets/images/spinner.svg'

/**
 * When isLoading display Loader 
 * @returns {HTMLElement}
 */
function Spinner() {

    return (
        <>
            <div className="isLoading">
              <img src={spinner} />
            </div>
        </>
    )
}

export default Spinner