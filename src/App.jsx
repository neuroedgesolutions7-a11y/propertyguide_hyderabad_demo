import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import MainLayout from './layouts/MainLayout.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import ListProperty from './pages/ListProperty.jsx'
import NotFound from './pages/NotFound.jsx'
import Properties from './pages/Properties.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    const key = 'pgh_splash_v1'
    try {
      const seen = window.localStorage.getItem(key)
      if (!seen) {
        setShowSplash(true)
        window.localStorage.setItem(key, '1')
      }
    } catch {
      setShowSplash(true)
    }
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence>{showSplash ? <SplashScreen onDone={() => setShowSplash(false)} /> : null}</AnimatePresence>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
