import { Link } from "react-router-dom"

/**
 * When page not found show page error 404
 * @returns {HTMLElement}
 */
function Error404() {
    return (
        <main>
            <div className="error">
                <h1><span className="error__404">404</span>
                Oups! La page que vous demandez n'existe pas.
                </h1>
                <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
            </div>
        </main>
    )
}

export default Error404