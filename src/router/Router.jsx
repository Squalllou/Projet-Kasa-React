import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout.jsx'
import Home from '../pages/home.jsx'
import About from '../pages/a-propos.jsx'
import NotFound from '../pages/notFound.jsx'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router