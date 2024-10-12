import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout