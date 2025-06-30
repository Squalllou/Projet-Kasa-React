import BannerHome from '../assets/BannerHome.png'
import '../styles/Banner.scss'

function Banner() {
  return (
    <section className="banner--home">
      <img src={BannerHome} alt="Paysage"className="banner--home__img" />
      <h1 className="banner--home__text">Chez vous, partout et ailleurs</h1>
    </section>
  )
}

export default Banner
