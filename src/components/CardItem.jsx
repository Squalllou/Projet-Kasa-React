import '../styles/CardItem.scss'

function CardItem({ logement }) {
  return (
    <article className="card">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
    </article>
  );
}

export default CardItem