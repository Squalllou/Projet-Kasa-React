import BannerAbout from '../components/BannerAbout.jsx'
import Collapse from '../components/Collapse.jsx'
import aboutDatas from '../datas/AboutDatas.js'
import '../styles/About.sass'

function About() {
  return (
    <div>
      <BannerAbout/>
      <div className="about-container">
        {aboutDatas.map(item => ( /** creation de la liste d'objet aboutdata  */
          <Collapse key={item.titre} titre={item.titre} variant="about"> {/** utilisation des collapse et passage des props pour definir la cle le titre et le variant du collapse */}
            <p>{item.texte}</p>
          </Collapse>
        ))}
      </div>
    </div>
  )
}

export default About
