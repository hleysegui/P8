import logoWhite from "src/assets/images/kasa-logo-white.svg"

function Footer() {
    return (
        <footer role="footer" className="footer">
            <img src={ logoWhite } alt="logo kasa blanc"></img>
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer