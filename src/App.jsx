import BackgroundAnimation from './components/BackgroundAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
