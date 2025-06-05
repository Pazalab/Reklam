import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Lenis from "@studio-freight/lenis"
import { useLayoutEffect, useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Eccentric from './pages/Eccentric'

function App() {
  const location = useLocation();
  const lenis = new Lenis();

 const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf)
 }
 //initialize lenis
 requestAnimationFrame(raf)

  useEffect(() => {
        window.scrollTo(0, 0);
  }, [location])

  //initialize animate on scroll
useLayoutEffect(() => {
      Aos.init({
            duration: 1800,
            once: true
      })
  }, [])
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about-us' element={<About />} />
             <Route path='/services' element={<Services />} />
             <Route path='/our-work' element={<Work />} />
             <Route path='/contact-us' element={<Contact />} />
             <Route path="/eccentric" element={<Eccentric />} />
    </Routes>
  )
}

export default App
