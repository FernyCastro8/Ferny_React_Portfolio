import './App.css';
import './index.css'
// import { Routes, Route, Navigate } from 'react-dom';
// import { Navelink } from 'react-router-dom';

// importing Components
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutME from './component/AboutMe'
import Portfolio_2 from './component/Portfolio';
import Skilss from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <AboutME />

      <Skilss />

      <Portfolio_2 />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
