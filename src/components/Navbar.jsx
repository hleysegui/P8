import { NavLink } from "react-router-dom"
import logo from "src/assets/images/kasa-logo.svg"

/**
 * Navigation will be display on all pages
 * @returns {HTMLElement}
 */
function Navbar() {

    return (
        <header className="header">
            <nav className="nav">
                <a className="nav__logo" href="/"><img src={ logo } alt="kasa-logo"/></a>
                <ul className="nav__list">
                    <li className="nav__link"><NavLink to="/">Accueil</NavLink></li>
                    <li className="nav__link"><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar