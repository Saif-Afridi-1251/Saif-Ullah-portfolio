import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Certificates from "./components/sections/Certificates"
import Contact from "./components/sections/Contact"
import Experience from "./components/sections/Experience"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Footer from "./components/layout/Footer"


function App() {
  

  return (
    <>
       <Navbar />

      <main>
        <Hero />
        <About />
        <Skills/>
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
