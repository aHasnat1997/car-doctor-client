import { Outlet } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import { useTitle } from './hooks/useTitle'
import Footer from './components/Footer';

function App() {

  useTitle("Welcome");

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
