import { Link } from 'react-router-dom'
import Error from '../assets/404.png'
import '../styles/notFound.sass'

function NotFound() {
  return (
    <div className="notFound">
      <h1><img src={Error} alt="404" /></h1>
      <p>
        <span> Oups! La page que </span> 
        <span> vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="notFound__link">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default NotFound