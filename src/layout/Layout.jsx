import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom' //pour pouvoir utiliser le layout sur plusieurs routes d'un coup dans Router

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* La ou les pages enfants vont s’afficher */}
      </main>
      <Footer />
    </>
  )
}

export default Layout
