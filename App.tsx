// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './src/Components/Home/Home'
import MenuDetails from './src/Components/Home/MenuDetails'
import Footer from './src/Components/Shared/Footer'
import { BrowserRouter,  Routes,Route,Link} from "react-router-dom"
import Navbar from './src/Components/Shared/Navbar'



function App() {
  return (
    <BrowserRouter >
    <Routes>  
    <Route path='/' element={<Home/>} />
    <Route path='MenuDetails' element={
      <div className="Appx bg-[white] px-[2em] ">
    <MenuDetails/>
    </div>
    } />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
