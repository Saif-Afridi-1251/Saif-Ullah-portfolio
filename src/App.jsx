import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Certificates from "./components/sections/Certificates"
import Contact from "./components/sections/Contact"
import Experience from "./components/sections/Experience"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Footer from "./components/layout/Footer"
import Loader from "./components/common/Loader"
import { useEffect, useState } from "react"

import BackgroundEffects from "./components/common/BackgroundEffect"



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // if not loaded portfolio
   if (loading) {
    return <Loader />;
  }
  
  
// else this portfolio

  return (
    
    <>
    <BackgroundEffects/>
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
