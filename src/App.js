import './App.css';
import './index.css'
// import { Routes, Route, Navigate } from 'react-dom';
// import { Navelink } from 'react-router-dom';

// importing Components
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutME from './component/AboutMe';
// import Portfolio from './component/Portfolio';
import Portfolio_2 from './component/Portfolio_2';
import Skilss from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';
// import Footer_2 from './component/Footer_2';


function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <AboutME />

      <Skilss />

      {/* <Portfolio /> */}

      <Portfolio_2 />

      <Contact />

      <Footer />

      {/* <Footer_2 /> */}

    </div>
  );
}

export default App;
