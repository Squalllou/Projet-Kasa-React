import { Link } from 'react-router-dom'
import Error from '../assets/404.png'
import '../styles/notFound.scss'

function NotFound() {
  return (
    <div className="notFound">
      <h1><img src={Error} alt="404" /></h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notFound__link">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default NotFound