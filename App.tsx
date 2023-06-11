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
    {/* <div className="Appx bg-[white] "> */}
    {/* <MenuDetails/> */}
    <Routes>  
    <Route path='/' element={<Home/>} />
    <Route path='MenuDetails' element={<MenuDetails/>} />
      </Routes>
      {/* <Home/> */}
    {/* </div> */}
    </BrowserRouter>
  )
}

export default App
