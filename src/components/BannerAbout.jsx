import BannerAboutImg from '../assets/BannerAboutImg.png'
import '../styles/BannerAbout.sass'

function BannerAbout() {
  return (
    <section className="banner--about">
      <img src={BannerAboutImg} alt="Paysage" className="banner--about__img" />
    </section>
  )
}

export default BannerAbout
