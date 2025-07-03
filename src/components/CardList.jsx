import CardItem from './CardItem.jsx'
import '../styles/CardList.sass'

function CardList({logements}) {
    return (
        <section className="cards">
            {logements.map(logement => (
                <CardItem key={logement.id} logement={logement} />
            ))}
        </section>
    )
}

export default CardList