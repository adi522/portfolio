import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Footer />

    </>
  )
}

export default App
