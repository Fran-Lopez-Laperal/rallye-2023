import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer />
    </div>


  );
}

export default App;

