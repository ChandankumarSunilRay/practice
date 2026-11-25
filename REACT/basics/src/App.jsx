import react from 'react'
import Home from './components/ui/Home'
import Footer from './components/ui/Footer'
import Hero from "./components/pages/Hero.jsx"
import Contact_us from './components/pages/Contact_us.jsx'
import About from "./components/pages/About.jsx"
import Services from "./components/pages/Services.jsx"

import { Routes, Route } from 'react-router-dom'

const navRoutes = (

  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/logo"   />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact_us />} />
    <Route path="/services" element={<Services />} />

  </Routes>

)

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <header className=' '>
        <Home />
      </header>

      <main className='flex-1  '>
        {navRoutes}
      </main>

      <footer className='w-full  '>
        <Footer />
      </footer>
    </div>
  )
}

export default App
