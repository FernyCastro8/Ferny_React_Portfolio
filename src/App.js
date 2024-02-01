import './App.css';
import './index.css'
// import { Routes, Route, Navigate } from 'react-dom';
// import { Navelink } from 'react-router-dom';

// importing Components
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutME from './component/AboutMe'
import Portfolio from './component/Portfolio';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <AboutME />

      <Skills />

      <Portfolio />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
