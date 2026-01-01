import './App.css'
import About from './components/organisms/About'
import Index from './components/organisms/Index'
import Experience from './components/organisms/Experience'
import Navigation from './components/organisms/Navigation'
import Projects from './components/organisms/Projects'

function App() {
  return (
    <>
      <Navigation />
      <Index />
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default App
