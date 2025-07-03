import BannerAbout from '../components/BannerAbout.jsx'
import Collapse from '../components/Collapse.jsx'
import aboutDatas from '../datas/AboutDatas.js'
import '../styles/About.sass'

function About() {
  return (
    <div>
      <BannerAbout/>
      <div className="about-container">
        {aboutDatas.map(item => (
          <Collapse key={item.titre} titre={item.titre} variant="about">
            <p>{item.texte}</p>
          </Collapse>
        ))}
      </div>
    </div>
  )
}

export default About
