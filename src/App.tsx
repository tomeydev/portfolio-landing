import './App.css'
import About from './components/organisms/About'
import Hero from './components/organisms/Hero'
import Experience from './components/organisms/Experience'
import Navigation from './components/organisms/Navigation'
import Projects from './components/organisms/Projects'
import Contact from './components/organisms/Contact'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
