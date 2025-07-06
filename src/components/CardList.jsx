import CardItem from './CardItem.jsx'
import '../styles/CardList.sass'

function CardList({logements}) { /** props logement qui vien du json pour pouvoir recuperer les informations des logements */
    return (
        <section className="cards">
            {logements.map(logement => (
                <CardItem key={logement.id} logement={logement} /> /** reutilisation des carditem pour en faire une liste grace a .map */
            ))}
        </section>
    )
}

export default CardList