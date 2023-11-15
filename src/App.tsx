
import { Outlet, Router } from 'react-router-dom'
import Routes from '@/routes'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
function App() {
  return (
    <>
    <Header/>
      <Routes/>
    <Footer />
    </>
  )
}

export default App
