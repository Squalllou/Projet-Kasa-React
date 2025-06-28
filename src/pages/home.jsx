import Banner from '../components/Banner.jsx'
import logements from '../datas/logements.json'
import CardList from '../components/CardList.jsx'

function Home() {
  return (
    <div>
      <Banner/>
      <CardList logements={logements} />
    </div>
  )
}

export default Home
