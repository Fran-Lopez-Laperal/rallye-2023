import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useEffect, useState } from 'react';
import NavbarMovil from './components/NavbarMovil/NavbarMovil';


function App() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const responsiveMovil = () => window.innerWidth > 420 ? setShowNav(true) : setShowNav(false);
    responsiveMovil();
    window.addEventListener("resize", () => responsiveMovil())

  })


  return (
    <div className="app">
      {showNav ?
        <NavBar /> : <NavbarMovil/>}
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;

