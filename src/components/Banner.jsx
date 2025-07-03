import BannerHome from '../assets/BannerHome.png'
import '../styles/Banner.sass'

function Banner() {
  return (
    <section className="banner--home">
      <img src={BannerHome} alt="Paysage"className="banner--home__img" />
      <h1 className="banner--home__text">
        <span> Chez vous,</span> 
        <span> partout et ailleurs</span>
      </h1>
    </section>
  )
}

export default Banner
