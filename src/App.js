import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from './components/home/Mainpage';
import About from './components/pages/About';
import Skill from './components/pages/Skill';
import SideBar from './components/sidebar/SideBar';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/home/Footer';

function App() {
  return (
    <>
      <div className="app">
        <SideBar />
        <div className='sections'>
          <Mainpage />
          <About />
          <Skill />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>


  );
}

export default App;
