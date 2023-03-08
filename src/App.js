import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './components/Footer'
import Header from "./components/Header"
import Home from './components/Home'
import Login from './components/Login'
import Uplaod from './components/Uplaod'
import Videos from './components/Videos'
import Signup from './components/Signup'

const App = () => {
  return (    
    <Router> 
      <Header />     
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/videos' element={<Videos />}/>
        <Route path='/upload' element={<Uplaod />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Footer />
    </Router>    
  )
}

export default App