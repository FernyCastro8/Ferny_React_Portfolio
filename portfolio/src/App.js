import './App.css';
import './index.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutME from './component/AboutMe';
import Project from './component/Project';
import Contact from './component/contact';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <AboutME />

      <Project />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
