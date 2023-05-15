import './App.css';
import './index.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutME from './component/AboutMe';
import Portfolio from './component/Portfolio';
import Contact from './component/contact';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <AboutME />

      <Portfolio />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
