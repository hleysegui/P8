import spinner from 'src/assets/images/spinner.svg'

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