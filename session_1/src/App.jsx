import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Props_ex from './components/Props_ex'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'
import Conditional3 from './components/Conditional3'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/props_ex' element={<Props_ex name="John" age={30} />} /> */}
        </Routes>
        <Props_ex name="Nimesh" age={22} />
        <Conditional1 isLoggedIn={false} />
        <Conditional2 isLoggedIn={true} />
        <Conditional3 isLoggedIn={false} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App