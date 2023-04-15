import { useEffect, useState } from 'react'
import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { GlobalProvider } from './context/GlobalState'
import Favouritespage from './pages/Favouritespage'
import Homepage from './pages/Homepage'
import './App.css'
import ErrorPage from './pages/Errorpage'
import SideBar from './components/SideBar'


function App() {
 
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className=" w-full h-screen bg-appBg_dark-200">
          <SideBar/>
        <Routes>
          <Route path='/' element={ <Navigate to='/homepage' />} />
          <Route  path='/homepage' element={<Homepage/>}/>
          <Route path='/favourites' element={<Favouritespage/>}  />
          <Route path ='/*' element={<ErrorPage/>} />
        </Routes>       
        </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
