import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import logements from '../datas/logements.json'
import Collapse from '../components/Collapse.jsx';
import Slideshow from '../components/Slideshow.jsx'

function LogementCard() {
  const { id } = useParams(); // Recupere l'id dans l'URL

  // Trouver le logement avec cet id
  const logement = logements.find(log => log.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <div className="logement-card">
        <Slideshow pictures={logement.pictures}/>
        <section className="logement-card__main-info">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <ul className="logement-card__tags">
            {logement.tags.map(tag => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
        </section>

        <aside className="logement-card__owner-rating">
            <img src={logement.host.picture} alt={logement.host.name} className="logement-card__owner-photo" />
            <p className="logement-card__owner-name">{logement.host.name}</p>
            {/*ici les etoiles de rank*/}
        </aside>

        <section className="logement-card__collapse">
            <Collapse key={logement.id} titre="Description" variant="logement-card">
            <p>{logement.description}</p>
            </Collapse>
            <Collapse key={logement.id} titre="Équipements" variant="logement-card">
                <ul>
                    {logement.equipments.map((equipement, index) => (
                        <li key={index}>{equipement}</li>
                    ))}
                </ul>
            </Collapse>
        </section>
    </div>
  );
}

export default LogementCard;