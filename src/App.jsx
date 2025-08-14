import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AnimatePresence } from "framer-motion"

import './App.css'
import Navbar from './Comonent/Navbar'
import {Routes,Route,useLocation} from "react-router-dom"
// import { Home } from 'lucide-react'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from "./Pages/Contact"
import login from './Pages/login'
import Footer from './Comonent/Footer'
import ScrollToTop from './Comonent/Scrolltop'
import PageWrapper from './Comonent/Pagewrapper'
function App() {
  const [count, setCount] = useState(0)
const location = useLocation();
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PageWrapper><Home/></PageWrapper>}/>
          <Route path='/about' element={<PageWrapper><About/></PageWrapper>}/>
          <Route path='/services' element={<PageWrapper><Services/></PageWrapper>}/>
          <Route path='/contact' element={<PageWrapper><Contact/></PageWrapper>}/>
          {/* <Route path='/login' element={<PageWrapper><login/></PageWrapper>}/> */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
