import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>

  </React.StrictMode>,
)
