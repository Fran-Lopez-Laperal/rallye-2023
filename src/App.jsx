import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useEffect, useState } from 'react';
import NavbarMovil from './components/NavbarMovil/NavbarMovil';
import News from './components/News/News';
import NewsDetail from './components/NewsDetail/NewsDetail';


function App() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const responsiveMovil = () => window.innerWidth > 480 ? setShowNav(true) : setShowNav(false);
    responsiveMovil();
    window.addEventListener("resize", () => responsiveMovil())

  })


  return (
    <div className="app">
      {showNav ?
        <NavBar /> : <NavbarMovil />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/noticias' element={<News />} />
        <Route path='/noticias/:id' element={<NewsDetail/>} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;

