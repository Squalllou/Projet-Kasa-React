import BannerHome from '../assets/BannerHome.png'
import '../styles/Banner.scss'

function Banner() {
  return (
    <section className="banner">
      <img src={BannerHome} alt="Paysage"className="banner__img" />
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </section>
  )
}

export default Banner
