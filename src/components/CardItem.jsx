import { Link } from 'react-router-dom'
import '../styles/CardItem.sass'

function CardItem({ logement }) { /** props logement qui vien du json pour pouvoir recuperer les informations des logements */
  return (
    <article className="card">
      <Link to={`/logement/${logement.id}`}> {/** balise Link de react permet plus d'interaction (comme savoir quel lien actif) que balise <a> */}
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </Link>
    </article>
  );
}

export default CardItem