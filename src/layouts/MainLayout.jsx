import { Outlet } from 'react-router-dom'

import FloatingButtons from '../components/FloatingButtons.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <div className="mx-auto px-4 md:px-6 lg:px-8 xl:w-[80%] xl:max-w-none xl:mx-auto xl:px-0">
        <Outlet />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
