import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import Header from './Components/Header'



export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/about' element = {<About />} />
    <Route path='/profile' element = {<Profile />} />
    <Route path='/sign-in' element = {<SignIn />} />
    <Route path='/sign-out' element = {<SignUp />} />
  </Routes>
  </BrowserRouter>
}
