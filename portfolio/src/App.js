import './App.css';
import './index.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutME from './component/AboutMe';
import Project from './component/Project';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <AboutME />

      <Project />

      <Footer />

    </div>
  );
}

export default App;
