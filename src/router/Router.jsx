import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout.jsx'
import Home from '../pages/home.jsx'
import About from '../pages/about.jsx'
import NotFound from '../pages/notFound.jsx'
import LogementCard from '../pages/logement-card.jsx'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="logement/:id" element={<LogementCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router