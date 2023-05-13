import { Outlet } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import StayTop from './components/StayTop';

function App() {
  return (
    <>
      <StayTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
