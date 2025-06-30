import { Link } from 'react-router-dom'
import '../styles/CardItem.scss'

function CardItem({ logement }) {
  return (
    <article className="card">
      <Link to={`/logement/${logement.id}`}>
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </Link>
    </article>
  );
}

export default CardItem