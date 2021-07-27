import './App.css';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <NavBar />
    <Header />
    <AboutMe />
    <Projects />
    <Experience />
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
