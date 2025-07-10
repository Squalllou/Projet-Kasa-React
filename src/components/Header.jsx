import { NavLink } from 'react-router-dom'  //composant React pour les liens qui permet de savoir quel lien est actif 
import logo from '../assets/logoKasaOrange.png'
import '../styles/Header.sass'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>ACCUEIL</NavLink> 
        <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>A PROPOS</NavLink> {/** comme la class Link permet d'utiliser isactive qui va definir la classe du lien et donc savoir lequel est actif et souligne */}
      </nav>
    </header>
  )
}

export default Header
