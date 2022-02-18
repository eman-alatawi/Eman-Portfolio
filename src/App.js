import './App.css';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import ReactGa from 'react-ga'

// import dotenv from 'dotenv';

// dotenv.config();

function App() {

  // // const googleAnalytics = process.env.REACT_APP_TRACKING_CODE;
  // useEffect(() => {
  //   // console.log(googleAnalytics)
  //   ReactGa.initialize('G-RDVN27LQ01')

  //   //to report page view
  //   ReactGa.pageview(window.location.pathname + window.location.search);
  // }, [])

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
