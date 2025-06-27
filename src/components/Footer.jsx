import logo from '../assets/logoKasaFooter.png'
import '../styles/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo-container">
          <img src={logo} alt="Logo de Kasa" className="footer__logo" />
        </div>
       <p className="footer__rights">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>

  )
}

export default Footer
