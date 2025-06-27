import { NavLink } from 'react-router-dom'  //composant React pour les liens qui permet de savoir quel lien est actif 
import logo from '../assets/logoKasaOrange.png'
import '../styles/Header.scss'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>Accueil</NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
