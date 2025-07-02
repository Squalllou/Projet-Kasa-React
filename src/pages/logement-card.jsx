import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import logements from '../datas/logements.json'
import Collapse from '../components/Collapse.jsx';
import Slideshow from '../components/Slideshow.jsx'
import '../styles/logement-card.scss'

function LogementCard() {
  const { id } = useParams(); // Recupere l'id dans l'URL

  // Trouver le logement avec cet id
  const logement = logements.find(log => log.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <div className="logement-card">
        <Slideshow pictures={logement.pictures} />

        <div className="logement-card__header">
            <section className="logement-card__info">
                <h1 className="logement-card__title">{logement.title}</h1>
                <p className="logement-card__location">{logement.location}</p>
                <ul className="logement-card__tags">
                    {logement.tags.map(tag => (
                    <li key={tag} className="tag">{tag}</li>
                    ))}
                </ul>
            </section>

            <aside className="logement-card__owner">
                <div className="owner__info">
                    <p className="owner__name">{logement.host.name}</p>
                    <img src={logement.host.picture} alt={logement.host.name} className="owner__photo"/>
                </div>
                <div className="owner__rating">
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star-empty"/>
                    <FaStar className="star-empty"/>
                </div>
            </aside>
        </div>

        <section className="logement-card__collapse">
            <Collapse key={`${logement.id}-desc`} titre="Description" variant="logement-card"> {/*** -desc pour avoir une key unique */}
                <p>{logement.description}</p>
            </Collapse>
            <Collapse key={`${logement.id}-equip`} titre="Équipements" variant="logement-card"> {/*** -equip pour avoir une key unique */}
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