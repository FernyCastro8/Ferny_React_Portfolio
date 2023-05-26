import './App.css';
import './index.css'
// import { Routes, Route, Navigate } from 'react-dom';
// import { Navelink } from 'react-router-dom';

// Components
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutME from './component/AboutMe';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Footer_Flowbite from './component/Footer_Flowbite';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <AboutME />

      <Portfolio />

      <Contact />

      {/* <Footer /> */}

      <Footer_Flowbite />

    </div>
  );
}

export default App;
